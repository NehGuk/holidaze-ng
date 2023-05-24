import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import UpdateVenueAPICall from "./UpdateVenueAPICall";

/* import { Link } from "react-router-dom"; */
import { useParams } from "react-router-dom";

import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { FormContainer, FormMedia, FormDesc, FormName, Sform, FormPrice, FormGuests, FormFacilities, FormAddress, FormCity, FormCountry, CTAs } from "./UpdateVenueForm.style";
import { CTAArea, SLinkButton, Sbutton, Sh1Title, Sinput, SpFormError, Stextarea } from "../styles/globalstyles";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter a name").max(100, "No more than 20 characters"),
  description: Yup.string().required("Please enter a description").max(800, "No more than 300 characters"),
  media: Yup.string().required("Please enter the image URL"),
  price: Yup.number().typeError("Please enter the price").required("Price must be a number"),
  maxGuests: Yup.number().typeError("Please enter the maximum number of guests (up to 100)").required(),
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

export default function UpdateVenueForm() {
  const [formData, setformData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { id } = useParams();

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

  // API CALL FOR PRE-FILLING THE FORM
  console.log(`HEREEEE: ${api_endpoints(null, id).getVenue}`);

  const { data } = useApi(api_endpoints(null, id).getVenue);
  console.log(data);

  // API CALL FOR PRE-FILLING THE FORM END

  return (
    <div>
      {data.media !== undefined && (
        <>
          <FormContainer>
            <div>
              <Sh1Title>Update venue</Sh1Title>
            </div>

            <Sform onSubmit={handleSubmit(onSubmit)}>
              <FormName>
                <label hidden>Name:</label>
                <Sinput type="text" defaultValue={data.name} {...register("name")} />
                {errors.name && <SpFormError>{errors.name.message}</SpFormError>}
              </FormName>

              <FormDesc>
                <label hidden>Description:</label>
                <Stextarea type="text" rows="6" defaultValue={data.description} {...register("description")} />
                {errors.description && <SpFormError>{errors.description.message}</SpFormError>}
              </FormDesc>

              <FormMedia>
                <label hidden>Cover picture URL:</label>
                <Sinput type="text" defaultValue={data.media[0]} {...register("media")} />
                {errors.media && <SpFormError>{errors.media.message}</SpFormError>}
              </FormMedia>

              <FormPrice>
                <label>
                  <h3>Price</h3>
                </label>
                <Sinput type="number" min="0" defaultValue={data.price} {...register("price")} />
                {errors.price && <SpFormError>{errors.price.message}</SpFormError>}
              </FormPrice>

              <FormGuests>
                <label>
                  <h3>Maximum guests</h3>
                </label>
                <Sinput type="number" min="1" max="100" defaultValue={data.maxGuests} {...register("maxGuests")} />
                {errors.maxGuests && <SpFormError>{errors.maxGuests.message}</SpFormError>}
              </FormGuests>

              <FormFacilities>
                <div>
                  <h3>Facilities</h3>
                </div>
                <div>
                  <input type="checkbox" defaultChecked={data.meta.pets} {...register("meta.pets")} />
                  <label htmlFor="pets">Pets</label>
                </div>

                <div>
                  <input type="checkbox" defaultChecked={data.meta.breakfast} {...register("meta.breakfast")} />
                  <label htmlFor="breakfast">Breakfast</label>
                </div>

                <div>
                  <input type="checkbox" defaultChecked={data.meta.wifi} {...register("meta.wifi")} />
                  <label htmlFor="breakfast">Wifi</label>
                </div>

                <div>
                  <input type="checkbox" defaultChecked={data.meta.parking} {...register("meta.parking")} />
                  <label htmlFor="parking">Parking</label>
                </div>
              </FormFacilities>

              <FormAddress>
                <label hidden htmlFor="address">
                  Address
                </label>
                <Sinput type="text" defaultValue={data.location.address} {...register("location.address")} />
              </FormAddress>

              <FormCity>
                <label hidden htmlFor="city">
                  City
                </label>
                <Sinput type="text" defaultValue={data.location.city} {...register("location.city")} />
              </FormCity>

              <FormCountry>
                <label hidden htmlFor="country">
                  Country
                </label>
                <Sinput type="text" defaultValue={data.location.country} {...register("location.country")} />
              </FormCountry>

              <CTAs>
                <CTAArea>
                  <Sbutton $green type="submit">
                    Update
                  </Sbutton>

                  <SLinkButton $dark to="/home">
                    Back
                  </SLinkButton>
                </CTAArea>
              </CTAs>
            </Sform>

            <div>{formSubmitted && <UpdateVenueAPICall formData={formData} />}</div>
          </FormContainer>
        </>
      )}
    </div>
  );
}
