import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById } from "../../api/Layout/LayoutApi";

const CategoryByName = () => {
  /// params
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /// get
  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [dispatch, id]);

  return <div>CategoryByName</div>;
};

export default CategoryByName;
