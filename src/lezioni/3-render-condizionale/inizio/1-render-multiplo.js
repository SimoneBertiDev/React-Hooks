import React, { useState, useEffect } from "react";
import Axios from "axios";
// const url = "https://api.github.com/users/QuincyLarson";
const url = "http://loaclHost:8080/user";

const ConditionalCompining = () => {
  const [isloading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const [user, setUsers] = useState("user defoult");

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await Axios.get(url);
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isloading) {
    return <Loading />;
  }

  if (iserror) {
    return <Error />;
  }

  return (
    <div>
      <h2>
        {user.map((el) => {
          return (
            <div key={el.userId} className="item shadow">
              <h5>
                {el.firstName} {el.lastName}
              </h5>
            </div>
          );
        })}
      </h2>
    </div>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h2>Error...</h2>
    </div>
  );
};

export default ConditionalCompining;
