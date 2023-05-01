import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  media: Yup.array().of(Yup.string()).required(),
  price: Yup.number().required(),
  maxGuests: Yup.number().required(),
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

export default function PostVenue() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    validationSchema: schema,
  });

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.maxGuests = parseFloat(data.maxGuests);
    data.media = [data.media];
    setFormSubmitted(true);
    console.log(data);
  };

  console.log(formSubmitted);

  return (
    <div>
      <h1>Add new venue</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}

        <label>Description:</label>
        <input type="text" {...register("description")} />
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
      <div></div>
    </div>
  );
}
