import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PostVenueAPICall from "./PostVenueAPICall";
import { FormContainer, FormFields } from "./PostVenueForm.style";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter a name").max(100, "No more than 20 characters"),
  description: Yup.string().required("Please enter a description").max(800, "No more than 300 characters"),
  media: Yup.string().required("Please enter the image URL"),
  price: Yup.number().typeError("Please enter the price").required("Price must be a number"),
  maxGuests: Yup.number().typeError("Please enter the maximum number of guests").required(),
  rating: Yup.number(),
  meta: Yup.object().shape({
    wifi: Yup.boolean(),
    parking: Yup.boolean(),
    breakfast: Yup.boolean(),
    pets: Yup.boolean(),
  }),
  location: Yup.object().shape({
    address: Yup.string(),
    city: Yup.string(),
    zip: Yup.string(),
    country: Yup.string(),
    continent: Yup.string(),
    lat: Yup.number(),
    lng: Yup.number(),
  }),
});

export default function PostVenueForm() {
  const [formData, setformData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    formData.price = parseFloat(formData.price);
    formData.maxGuests = parseFloat(formData.maxGuests);
    formData.media = [formData.media];
    setFormSubmitted(true);
    /* console.log(formData); */
    setformData(formData);
  };

  /* console.log(formSubmitted); */

  return (
    <div>
      <FormContainer>
        <div>
          <h1>Add new venue</h1>
        </div>
        <FormFields>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input type="text" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <label>Description:</label>
            <textarea type="text" {...register("description")} />
            {errors.description && <span>{errors.description.message}</span>}

            <label>Media:</label>
            <input type="text" {...register("media")} />
            {errors.media && <span>{errors.media.message}</span>}

            <label>Price:</label>
            <input type="number" {...register("price")} />
            {errors.price && <span>{errors.price.message}</span>}

            <label>Max Guests:</label>
            <input type="number" {...register("maxGuests")} />
            {errors.maxGuests && <span>{errors.maxGuests.message}</span>}

            <label htmlFor="pets">Pets</label>
            <input type="checkbox" {...register("meta.pets")} />

            <label htmlFor="breakfast">Breakfast</label>
            <input type="checkbox" {...register("meta.breakfast")} />

            <label htmlFor="breakfast">Wifi</label>
            <input type="checkbox" {...register("meta.wifi")} />

            <label htmlFor="parking">Parking</label>
            <input type="checkbox" {...register("meta.parking")} />

            <label htmlFor="address">Address</label>
            <input type="text" {...register("location.address")} />

            <label htmlFor="city">City</label>
            <input type="text" {...register("location.city")} />

            <label htmlFor="country">Country</label>
            <input type="text" {...register("location.country")} />

            <button type="submit">Submit</button>
          </form>
        </FormFields>
        <div>{formSubmitted && <PostVenueAPICall formData={formData} />}</div>
      </FormContainer>
    </div>
  );
}
