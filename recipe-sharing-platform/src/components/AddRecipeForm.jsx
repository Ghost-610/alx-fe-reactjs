import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes with target.value explicitly
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Explicit use of e.target.value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Reset validation error on change
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = formData.ingredients.split(",").map((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please include at least two ingredients.";
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted Recipe Data:", formData);
      setSubmitted(true);

      // Reset form after submission
      setFormData({
        title: "",
        ingredients: "",
        steps: "",
      });

      setErrors({});
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg md:mt-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Add a New Recipe
      </h1>

      {/* Success message */}
      {submitted && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg text-center">
          Recipe submitted successfully!
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Ingredients (separate by commas)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="e.g., tomato, garlic, olive oil"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label
            htmlFor="steps"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            placeholder="Describe how to prepare the recipe"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md transition duration-300 transform hover:scale-105"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
