import React from "react";
import Car from "../Car/Car";
import Car1 from "../../../images/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import Car2 from "../../../images/joshua-koblin-eqW1MPinEV4-unsplash.jpg";
import Car3 from "../../../images/lance-asper-N9Pf2J656aQ-unsplash.jpg";
import Car4 from "../../../images/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import Car5 from "../../../images/joshua-koblin-eqW1MPinEV4-unsplash.jpg";
import Car6 from "../../../images/lance-asper-N9Pf2J656aQ-unsplash.jpg";

const Cars = () => {
  const allCars = [
    {
      name: "Audi",
      photo: Car1,
      price: 125000,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium at expedita officiis, animi quia nostrum illo exercitationem, distinctio architecto dolore iusto dolorem tempora dicta inventore nihil vel perferendis nulla pariatur.",
    },
    {
      name: "Bmw",
      photo: Car2,
      price: 125000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates laudantium quibusdam, incidunt officiis, eius quos culpa praesentium repudiandae similique quasi veniam laboriosam assumenda, minima perspiciatis aspernatur. Doloribus, at vel rerum nostrum explicabo eligendi animi laboriosam, officiis eius aliquam cumque adipisci.",
    },
    {
      name: "Bugati",
      photo: Car3,
      price: 125000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum consectetur iste neque vel. Amet ipsum, doloribus nihil beatae enim tempore quos sed necessitatibus. Ex, odit sint nulla nostrum quaerat tempora natus repellendus sed dolores distinctio repudiandae vero magnam id eum explicabo unde exercitationem architecto. Assumenda eos voluptate non optio? Optio aliquid dolorem dolorum dolores corrupti iusto velit. Sapiente, mollitia harum.",
    },
    {
      name: "Ferrari",
      photo: Car4,
      price: 125000,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium at expedita officiis, animi quia nostrum illo exercitationem, distinctio architecto dolore iusto dolorem tempora dicta inventore nihil vel perferendis nulla pariatur.",
    },
    {
      name: "Toyota",
      photo: Car5,
      price: 125000,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium at expedita officiis, animi quia nostrum illo exercitationem, distinctio architecto dolore iusto dolorem tempora dicta inventore nihil vel perferendis nulla pariatur.",
    },
    {
      name: "Audi",
      photo: Car6,
      price: 125000,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium at expedita officiis, animi quia nostrum illo exercitationem, distinctio architecto dolore iusto dolorem tempora dicta inventore nihil vel perferendis nulla pariatur.",
    },
  ];
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7 overflow-x-hidden">
      {allCars.map((car) => (
        <Car car={car}></Car>
      ))}
    </div>
  );
};

export default Cars;
