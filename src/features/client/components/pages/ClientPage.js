import React from "react";
import { getActiveUserStart } from "../../store/actions";
import { useDispatch } from "react-redux";

const ClientPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getActiveUserStart());
  }, []);
  return <div>ClientPage</div>;
};

export default ClientPage;
