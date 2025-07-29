import { Button, Table } from "react-bootstrap";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Delete, Get } from "../components/http.service";
import { Link } from "react-router-dom";



const CartPage = () => {
  // const { id } = useParams();
  const [cricketdata, setcricket] = useState([]);

  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    Get(`http://localhost:8888/cardItems`)
      .then((res) => {
        setcricket(res.data);
        console.log(res.data);
           // Initialize quantities
        const initialQuantities = {};
        res.data.forEach(item => {
          initialQuantities[item.id] = 1;
        });
        setQuantity(initialQuantities);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const increaseQuantity = (id) => {
    setQuantity(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantity(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  // const total = (cricketdata.price * quantity).toFixed(2);
  // const total = cricketdata.reduce((acc, item) => {
  //   const qty = quantity[item.id] || 1;
  //   return acc + item.price * qty;
  // }, 0).toFixed(2);

  const handelDelete = (product_id)=>{
    if(window.confirm('Are you sure you want to remove this item ?')){
      Delete(`http://localhost:8888/cardItems/${product_id}`)
    .then(()=>{
      window.alert('Item removed!')
      FetchData()
    })
    .catch((error)=>{
      console.log(error)
    })
    } 
  }


  //total amount of all product/Order Summary
  const totalAmount = cricketdata.reduce((acc, item) => {
  const qty = quantity[item.id] || 1;
  return acc + item.price * qty;
  }, 0);

  const discount = totalAmount >= 1500 ? 900 : 0;
  const convenienceFee = 49;
  const finalAmount = (totalAmount - discount + convenienceFee).toFixed(2);


  return (
    <div>
      <div className="text-center mt-5 fw-bold">
        <h1 style={{ color: "darkblue"}}>Your Cart</h1>
      </div>

      <div className="container mt-4">
        <Table bordered responsive className="text-center border-dark border-4">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
           {
            cricketdata.map((val,index)=>{
              return  <tr key={val.id}>
              <td>{val.id}</td>
              <td>
                <img
                  src={val.url}
                  alt="Product"
                  style={{ width: "50px", marginRight: "10px" }}
                />
                {val.title}
              </td>
              <td>₹ {val.price}</td>
              <td>
                <Button variant="light" onClick={()=>decreaseQuantity(val.id)}>
                  <RemoveCircleOutlineIcon />
                </Button>
                <span className="mx-2">{quantity[val.id]}</span>
                <Button variant="light" onClick={()=> increaseQuantity(val.id)}>
                  <AddCircleOutlineIcon />
                </Button>
              </td>
              <td>{(val.price * (quantity[val.id] || 1)).toFixed(2)}</td>
              <td>
                <Button variant="danger" onClick={() => handelDelete(val.id)}>
                  <RestoreFromTrashIcon />
                </Button>
              </td>
            </tr>
            })
           }
          </tbody>
        </Table>
      </div>

      {/* Order Summary Section */}
      <div className="container mt-4 p-3 mb-5" style={{ maxWidth: "400px", marginLeft: "auto", border:'2px solid black' }}>
        <h4 className="fw-bold mb-3">Order Summary</h4>

        <div className="d-flex justify-content-between">
          <span>Total Price (Inc. GST)</span>
          <span>₹ {totalAmount}</span>
        </div>

        <div className="d-flex justify-content-between text-success mt-2">
          <span>Discount</span>
          <span>- ₹ {discount}</span>
        </div>

        <div className="d-flex justify-content-between text-muted mt-2">
          <span>Convenience Fee</span>
          <span>₹ {convenienceFee}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between fw-bold">
          <span>Total Payable</span>
          <span>₹ {finalAmount}</span>
        </div>

        <Button 
          variant="success" 
          className="mt-3 w-100"
          onClick={() => alert('Redirecting to payment...')}
        >
          Proceed to Payment
        </Button>
      </div>
      <div className="text text-center">
            <Link 
            to={"/"}
            style={{padding:'5px', background:'darkblue', color:'white', borderRadius:'10px', margin:"40px"}}
            >
                Back to Shopping
            </Link>
      </div>

    </div>
  );
};

export default CartPage;
