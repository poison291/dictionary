import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import Cards from "./Cards";

export default function Home() {
  const [search, setSearch] = useState("Goat");
  const [word, setword] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (Array.isArray(data)) {
        setword(data);
        console.log(data);
      } else {
        setword([]); 
      }
      setLoading(false);
    } catch (error) {
      setloading(false);
      
    }
  };
  useEffect(() => {
    // setloading(true)
    fetchData();
  }, [search]);

  if (loading) {
    return <h1>Loading......</h1>;
  } else
    return (
      <>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Any word"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <h3 className="live-text">{search}</h3>
        <div className="map">
          {word.map((name, Mainindex) => (
            <div key={Mainindex}>
              {name.meanings.map((meaning, indx) => (
                <div key={indx}>
                  {
                    meaning.definitions.map((defn, idx) => (
                      <Cards data={defn}/>
                    ))
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
}
