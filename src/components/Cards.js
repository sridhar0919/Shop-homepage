import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
} from 'reactstrap';

export default function Cards({
  products,
  disable,
  setDisable,
  cart,
  setCart,
}) {
  const disabledButtons = (index) => {
    let newDisabled = [...disable];
    newDisabled[index] = true;
    setDisable([...newDisabled]);
  };
  return (
    <div>
      <section classNameName="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <div className="col mb-5">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{product.productName}</CardTitle>
                        <CardSubtitle>
                          <div className="d-flex  small text-warning mb-2">
                            {(function () {
                              if (product.rating === 1) {
                                return <div className="bi-star-fill"></div>;
                              } else if (product.rating === 2) {
                                return (
                                  <>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                  </>
                                );
                              } else if (product.rating === 3) {
                                return (
                                  <>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                  </>
                                );
                              } else if (product.rating === 4) {
                                return (
                                  <>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                  </>
                                );
                              } else if (product.rating === 5) {
                                return (
                                  <>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                  </>
                                );
                              } else {
                                return <></>;
                              }
                            })()}
                          </div>
                        </CardSubtitle>
                        <CardText>{product.productPrice}</CardText>
                        <Button
                          disabled={disable[index]}
                          onClick={() => {
                            setCart(cart + 1);
                            disabledButtons(index);
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
