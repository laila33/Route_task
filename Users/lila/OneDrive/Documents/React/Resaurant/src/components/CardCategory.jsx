import React, { useState, useEffect } from "react";
import AOS from "aos"; // تأكدي إنك عاملة import
import "aos/dist/aos.css";

function CardCategory({ activeTab }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryName = activeTab === "launch" ? "Beef" : activeTab === "breakfast" ? "Breakfast" : "Seafood";

    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data = await response.json();
        setItems(data.meals ? data.meals.slice(0, 8) : []);
        setLoading(false);
        setTimeout(() => {
          AOS.refresh();
        }, 100); 

      } catch (error) {
        console.error("Error fetching meals:", error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, [activeTab]);

  if (loading) {
    return <div className="text-center py-10 w-full text-[#FEA116]">Loading Delicious Food...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 mt-10 w-full px-[24px]">
      {items.map((item, index) => (
        <div 
          key={item.idMeal} 
          data-aos="fade-up" // الأنيميشن من تحت لفوق
          data-aos-delay={index * 100} // تتابع في الظهور (Stagger)
          className="flex items-center gap-4"
        >
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-20 h-20 rounded object-cover shadow-sm"
          />

          <div className="flex-1 border-b border-gray-200 pb-2">
            <div className="flex justify-between items-center mb-1">
              <h5 className="font-bold text-[#0F172B] text-lg font-nunito truncate max-w-[200px]">
                {item.strMeal}
              </h5>
              <span className="text-[#FEA116] font-bold text-xl">
                ${(Math.random() * 50 + 10).toFixed(0)}
              </span>
            </div>
            <p className="text-gray-500 text-sm italic font-nunito leading-tight">
              Specialized {activeTab} dish prepared with fresh ingredients.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardCategory;