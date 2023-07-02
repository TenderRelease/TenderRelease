import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Result() {
  const [tenderId, setTenderId] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const [name, setName] = useState(".....");
  // const [, set] = useState("...");
  // const [, set] = useState("...");
  // const [, set] = useState("...");
  // const [, set] = useState("...");
  
  useEffect(() => {
    axios.get("https://tenderrelease.cyclic.app/getWinner").then((response) => {
      if (response.data == "Error") {
        alert(response.data);
      } else {
        setTenderId(response.data.tenderId);
        setTokenId(response.data.winnerId);
        console.log(tokenId);
        console.log(response.data.winnerId);
      }
    });
  }, []);
  useEffect(() => {
    axios
      .get("https://tenderrelease.cyclic.app/tenderDetails/" + tokenId)
      .then((response) => {
        if (response.data == "Error!!") {
          alert("Error");
        } else {
          console.log(response.data);
          setName(response.data.companyName);
        }
      });
  }, [tokenId]);

  return <div className="containers mx-auto text-5xl font-semibold  my-48 text-center">and the tender goes to {name} for the tender {tenderId}</div>;
}
