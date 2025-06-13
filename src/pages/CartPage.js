import { Button, Table } from "react-bootstrap";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const CartPage = () => {
  const { id } = useParams();
  const [cricketdata, setcricket] = useState([]);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    axios
      .get(`http://localhost:8888/cardItems`)
      .then((res) => {
        setcricket(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const increaseQuantity = (product) => {
    setQuantity(product(quantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = (cricketdata.price * quantity).toFixed(2);

  const handelDelete = (product_id)=>{
    axios
    .delete(`http://localhost:8888/cardItems/${product_id}`)
    .then(()=>{
      window.alert('Item removed!')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <div className="text-center mt-5">
        <h1 style={{ color: "darkblue", fontWeight: "bold" }}>Your Cart</h1>
      </div>

      <div className="container mt-4">
        <Table bordered responsive className="text-center">
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
              return  <tr>
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
                <Button variant="light" onClick={()=>decreaseQuantity(val)}>
                  <RemoveCircleOutlineIcon />
                </Button>
                <span className="mx-2">{quantity}</span>
                <Button variant="light" onClick={()=> increaseQuantity(val)}>
                  <AddCircleOutlineIcon />
                </Button>
              </td>
              <td>{total}</td>
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
    </div>
  );
};

export default CartPage;
