import React from "react";
import "./bag.css";
import ShopBagItem from "../../components/ShopBagItem/ShopBagItem";

function Bag({ boardgames, reference }) {
  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Shopping-Bag</h1>
        </div>
      </div>
      {boardgames.length === 0 ? (
        <h2>Your shopping-bag is empty</h2>
      ) : (
        <>
          <div className="row">
            <div className="table-responsive">
              <table className="shopBagTable table table-borderless align-middle">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Boardgame</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {boardgames.map((boardgame, index) => (
                    <ShopBagItem
                      index={index}
                      key={boardgame.id}
                      boardgame={boardgame}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Bag;
