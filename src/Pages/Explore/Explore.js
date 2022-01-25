import React from "react";
import Car1 from "../../images/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import Car2 from "../../images/joshua-koblin-eqW1MPinEV4-unsplash.jpg";
import Car3 from "../../images/lance-asper-N9Pf2J656aQ-unsplash.jpg";
import Car4 from "../../images/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import Car5 from "../../images/joshua-koblin-eqW1MPinEV4-unsplash.jpg";
import Car6 from "../../images/lance-asper-N9Pf2J656aQ-unsplash.jpg";

const Explore = () => {
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
    <div className="text-center text-slate-800 font-semibold text-lg my-7 ">
      <h1>Our Products</h1>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4overflow-x-hidden">
        {allCars.map((car) => (
          <div className="rounded-lg shadow-lg bg-white">
            <div className="p-2">
              <img className="rounded-lg" src={car.photo} alt="" />
            </div>

            <div className="p-3">
              <div className="flex justify-between">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {car.name}
                </h5>
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  ${car.price}
                </h5>
              </div>
              <p className="text-gray-700 text-base mb-4">{car.description}</p>
              {/* <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
