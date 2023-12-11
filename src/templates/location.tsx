/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import "../index.css";
import { Image } from "@yext/pages/components";
import Carousel from "../components/Carousel";
import ProductsCarousel from "../components/ProductsCarousel";
import ExpertServicesCarousel from "../components/ExpertServicesCarousel";
import FAQs from "../components/FAQs";
import { LexicalRichText } from "@yext/react-components";
import Schema from "../components/Schema";
import StaticMap from "../components/static-map";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "emails",
      "c_richDescriptionv2",
      "c_loc_image2",
      "c_loc_image1",
      "c_animationPhoto1",
      "c_animationPhoto2",
      "c_animationPhoto3",
      "c_animationPhoto4",
      "c_animationPhoto5",
      // "services",
      // "c_promotion1",
      // "c_promotion2",
      // "c_aboutTheStore",
      // "c_trendingProducts.sectionHeader",
      // "c_trendingProducts.products.name",
      // "c_trendingProducts.products.primaryPhoto",
      // "c_trendingProducts.products.price",
      // "c_expertServices",
      // "c_relatedFAQs.relatedFAQs.name",
      // "c_relatedFAQs.relatedFAQs.answerV2",
      // "c_nearbyLocations.nearbyLocations.name",
      // "c_nearbyLocations.nearbyLocations.address",
      // "c_nearbyLocations.nearbyLocations.geomodifier",
      // "c_storefrontPhoto",
      // "geomodifier",
      // "c_servicesAvailable",

      // "c_expertServices.image",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const _cpy = document;
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    emails,
    c_richDescriptionv2,
    c_loc_image1,
    c_loc_image2,
    c_animationPhoto1,
    c_animationPhoto2,
    c_animationPhoto3,
    c_animationPhoto4,
    c_animationPhoto5,

    // services,
    // c_promotion1,
    // c_aboutTheStore,
    // c_promotion2,
    // c_trendingProducts,
    // c_expertServices,
    // c_relatedFAQs,
    // c_nearbyLocations,
    // c_storefrontPhoto,
    // geomodifier,
    // c_servicesAvailable,
  } = document;
  console.log(address);

  return (
    <>
      <style>
        {`

          .ctabutton{
            padding: 1em 2em;
                background: #c01621;
                margin-top: 0.5em;
                color: white;
               
          }
          .ctabutton:hover {
            background-color: black;
          }
      

                .PropText{
                  
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-attachment: scroll;
            background-size: cover;
            width: 1792px;
            height: 465px;
            opacity: 1;
            animation:mymove;
            animation-duration: 10s;
            animation-iteration-count: infinite;
            animation-direction: infinite;
                }
                
                @keyframes mymove {
                  0% {
                   background-image: url(${c_animationPhoto1.url});
                  }
                  25% {
                    background-image: url(${c_animationPhoto2.url});
                  }
                  50% {
                    background-image: url(${c_animationPhoto3.url});
                    
                  }
                  75% {
                    background-image: url(${c_animationPhoto4.url});
                    
                  }
                  100% {
                    background-image: url(${c_animationPhoto5.url});
                  }
                }
            `}
      </style>
      <Schema document={_cpy}></Schema>
      <PageLayout _site={_site}>
        <div style={{ margin: "1em" }}>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "1em", height: "1em", margin: "5px" }}>
                <svg
                  className="svg-inline--fa fa-envelope fa-w-16"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  data-fa-i2svg=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="red"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>

              <div>{emails}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "1em", height: "1em", margin: "5px" }}>
                <svg
                  className="svg-inline--fa fa-phone fa-w-16 fa-rotate-90"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="phone"
                  role="img"
                  data-fa-i2svg=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="red"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>
              </div>
              <div>{mainPhone}</div>
            </div>
          </div>
        </div>

        <div style={{ margin: "1em", display: "flex" }}>
          <div style={{ width: "50%", marginLeft: "4em" }}>
            <img src={_site.logo.image.url} style={{ width: "100px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              margin: "1em",
              padding: "2em",
            }}
          >
            <div style={{ color: "red" }}>
              <a>CARVALHO BATISTA LDA</a>
            </div>
            <div>
              <a>BRANDS</a>
            </div>
            <div>
              <a>PRODUCTS</a>
            </div>
            <div>
              <a>ABOUT US</a>
            </div>
            <div>
              <a>CONTACTS</a>
            </div>
          </div>
        </div>

        <div className="PropText">
          <div
            style={{ textAlign: "center", margin: "auto 28%", padding: "3em" }}
          >
            <div
              style={{
                width: "14em",
                height: "1.5em",
                backgroundColor: "rgb(242 235 235 / 85%)",
                textAlign: "center",
                verticalAlign: "middle",
                fontSize: "3em",
              }}
            >
              {name}
            </div>
            <button
              className="ctabutton"
              // style={{
              //   padding: "1em 2em",
              //   background: "#c01621",
              //   marginTop: "0.5em",
              // }}
            >
              Contact Us
            </button>
          </div>
          {/* <img src={_site.c_landpageimg2.url}></img> */}
        </div>
        <div
          style={{
            textAlign: "center",
            margin: "0em 5em",
          }}
        >
          <div style={{ fontSize: "44px", width: "100%", padding: "0em 10em" }}>
            {c_richDescriptionv2.json.root.children[0].children[0].text}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <b>
                {c_richDescriptionv2.json.root.children[1].children[0].text}
              </b>
            </div>
            <div>
              {c_richDescriptionv2.json.root.children[1].children[1].text}
            </div>
            <div>
              <b>
                {c_richDescriptionv2.json.root.children[1].children[2].text}
              </b>
            </div>
            <div>
              {c_richDescriptionv2.json.root.children[1].children[3].text}
            </div>
          </div>
          <div
            style={{
              width: "60%",
              justifyContent: "center",
              margin: "auto",
              marginTop: "2em",
            }}
          >
            {c_richDescriptionv2.json.root.children[1].children[6].text}
          </div>
          <div
            style={{
              display: "flex",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
                width: "58%",
                marginTop: "2em",
              }}
            >
              <p>
                <b>
                  {c_richDescriptionv2.json.root.children[1].children[9].text}
                </b>
                {c_richDescriptionv2.json.root.children[1].children[10].text}
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1em",
          }}
        >
          <div style={{ padding: "0.5em" }}>
            <img src={c_loc_image1.url} style={{ width: "35em" }}></img>
          </div>
          <div style={{ padding: "0.5em" }}>
            <img src={c_loc_image2.url} style={{ width: "35em" }}></img>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            margin: "2em 15em",
          }}
        >
          <div>
            <b>
              {address.line1} {address.line2} {address.city}{" "}
              {address.localizedCountryName} {address.postalCode}
            </b>
          </div>
          <div>
            <b>Telephone</b>
            {mainPhone}
          </div>
          <div>
            <b>Email</b>: {emails}
          </div>
          <div>
            <div className="mt-8">
              {hours && <Hours title={"Store Timings:"} hours={hours} />}
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "4em" }}>
            <div style={{ width: "50%" }}>
              <form>
                <input
                  type="text"
                  defaultValue="* Name"
                  style={{
                    color: "gray",
                    width: "30em",
                    border: "1px solid lightgray",
                    height: "30px",
                    margin: "0.5em 0em",
                  }}
                />
                <input
                  type="text"
                  defaultValue="* Telephone"
                  style={{
                    color: "gray",
                    width: "30em",
                    border: "1px solid lightgray",
                    height: "30px",
                    margin: "0.5em 0em",
                  }}
                />
                <input
                  type="text"
                  defaultValue="* Email"
                  style={{
                    color: "gray",
                    width: "30em",
                    border: "1px solid lightgray",
                    height: "30px",
                    margin: "0.5em 0em",
                  }}
                />
                <textarea
                  defaultValue="* Message"
                  style={{
                    color: "gray",
                    width: "30em",
                    border: "1px solid lightgray",
                    height: "12em",
                    margin: "0.5em 0em",
                  }}
                ></textarea>
                <div>
                  <input
                    type="checkbox"
                    style={{
                      color: "gray",

                      // height: "12em",
                      margin: "0.5em 0em",
                    }}
                  ></input>
                  <label> I have read and agree to the privacy policy</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    style={{
                      color: "gray",

                      // height: "12em",
                      margin: "0.5em 0em",
                    }}
                  ></input>
                  <label> I want to receive marketing materials</label>
                </div>
                <button
                  style={{
                    width: "30em",
                    background: "#c01621",
                    color: "white",
                    height: "3em",
                    marginTop: "2em",
                  }}
                >
                  {" "}
                  Send Message
                </button>
              </form>{" "}
            </div>
            <div>
              {" "}
              <div className="w-96">
                {geocodedCoordinate && (
                  <StaticMap
                    latitude={geocodedCoordinate.latitude}
                    longitude={geocodedCoordinate.longitude}
                  ></StaticMap>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div>{address}</div> */}

        <img src={_site.c_footer.url}></img>

        {/* <div>PageImage</div>
        <div>
          Location specific
          <div>Location image</div>
          <div>address</div>
          <div>Form and map</div>
          <div>Privacy</div>
        </div>
        <div>Footer</div>

        <div className="w-96">
          {geocodedCoordinate && (
            <StaticMap
              latitude={geocodedCoordinate.latitude}
              longitude={geocodedCoordinate.longitude}
            ></StaticMap>
          )}
        </div> */}
      </PageLayout>
    </>
  );
};

export default Location;
