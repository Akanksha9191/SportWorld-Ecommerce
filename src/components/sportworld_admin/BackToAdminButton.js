import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BackToAdminButton = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  const goToAdmin = () => {
    navigate("/sportworld-admin");
  };

  return (
    <>
      {isAdmin && (
        <button onClick={goToAdmin} style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1,
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px"
        }}>
          Back to Admin
        </button>
      )}
    </>
  );
};
export default BackToAdminButton;
