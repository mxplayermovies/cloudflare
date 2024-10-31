import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import SocialSharing from "../components/SocialSharing";
import Script from "next/script";
import movies from "../public/moviesfull.json";

const HomePage = ({ categorizedItems }) => {
  const [currentCategory, setCurrentCategory] = useState("movie"); // Current tab
  const [pageStates, setPageStates] = useState({
    movie: 1,
    tvshow: 1,
    adult: 1,
  }); // Separate page states for each category

  const itemsPerPage = 24; // 24 items per page

  // Handle category change
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  // Handle page change for each category
  const handlePageChange = (category, newPage) => {
    setPageStates((prevState) => ({
      ...prevState,
      [category]: newPage,
    }));
  };

  // Get paginated items based on the current page and current category
  const getPaginatedItems = () => {
    const categoryItems = categorizedItems[currentCategory] || [];
    const currentPage = pageStates[currentCategory];
    const startIndex = (currentPage - 1) * itemsPerPage;
    return categoryItems.slice(startIndex, startIndex + itemsPerPage);
  };

  // Render the items in the grid
  const renderItems = () => {
    const currentItems = getPaginatedItems();

    if (!currentItems.length) {
      return <p>No items available.</p>;
    }
    return currentItems.map((item, index) => (
      <div key={index} className="p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 ">
        <Link
          href={`/${
            currentCategory === "movie"
              ? "movies"
              : currentCategory === "tvshow"
              ? "tvshow"
              : "adult"
          }/${item.id}`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            quality={90}
            title={item.title}
            // priority
            loading="lazy"
            className="border-2 border-blue-500 object-cover w-full h-48"
            style={{
              width: "100%",
              height: "auto",
              boxShadow: "0 0 10px 0 #0000FF",
              filter:
                "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
            }}
          />
        </Link>
      </div>
    ));
  };

  // Calculate total pages for the current category
  const totalPages = Math.ceil(
    (categorizedItems[currentCategory]?.length || 0) / itemsPerPage
  );

  const homeSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://soap2dayhd.vercel.app/home/",
        url: "https://soap2dayhd.vercel.app/home/",
        name: "Home Section - Soap2Day HD™",
        isPartOf: { "@id": "https://soap2dayhd.vercel.app/#website" },
        primaryImageOfPage: {
          "@id": "https://soap2dayhd.vercel.app/home/#primaryimage",
        },
        image: { "@id": "https://soap2dayhd.vercel.app/home/#primaryimage" },
        thumbnailUrl: "https://soap2dayhd.vercel.app/og_image.jpg",
        breadcrumb: {
          "@id": "https://soap2dayhd.vercel.app/home/#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://soap2dayhd.vercel.app/home/#primaryimage",
        url: "https://soap2dayhd.vercel.app/og_image.jpg",
        contentUrl: "https://soap2dayhd.vercel.app/og_image.jpg",
        width: 1280,
        height: 720,
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://soap2dayhd.vercel.app/home/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://soap2dayhd.vercel.app/",
          },
          { "@type": "ListItem", position: 2, name: "Home" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://soap2dayhd.vercel.app/#website",
        url: "https://soap2dayhd.vercel.app/",
        name: "Soap2Day HD™",
        description: "",
        publisher: { "@id": "https://soap2dayhd.vercel.app/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://soap2dayhd.vercel.app/?s={search_term_string}",
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://soap2dayhd.vercel.app/#organization",
        name: "Soap2Day HD™",
        url: "https://soap2dayhd.vercel.app/",
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": "https://soap2dayhd.vercel.app/#/schema/logo/image/",
          url: "https://soap2dayhd.vercel.app/logo.png",
          contentUrl: "https://soap2dayhd.vercel.app/logo.png",
          width: 280,
          height: 100,
          caption: "Soap2Day HD™",
        },
        image: { "@id": "https://soap2dayhd.vercel.app/#/schema/logo/image/" },
      },
    ],
  });

  return (
    <>
      <Head>
        <title>Soap2Day HD™ - Home Page.</title>
        <meta property="og:title" content="Soap2Day HD™ - Home Page." />

        <meta
          name="description"
          content="Watch and download movies, TV shows, and adult content online for free. Join the Soap2Day HD™ community now!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://soap2dayhd.vercel.app/home" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          href="https://soap2dayhd.vercel.app/home"
          hreflang="en-us"
        />
        <meta property="og:url" content="https://soap2dayhd.vercel.app/home" />
        <meta
          property="og:image"
          content="https://soap2dayhd.vercel.app/og_image.jpg"
        />
        <meta property="og:site_name" content="Soap2Day HD™" />
        <meta
          name="keywords"
          content="soap2day, soap2dayto, soap2days, soap2day apk, soap2day hd, soap2day id, soap2day rs, soap2day movies, official soap2day, soap2day free, Soap2Day HD, movies online, watch movies online, watch movies free, 123movies, gomovies, putlocker, putlockers, hdtoday"
        />
        <meta
          property="og:description"
          content="Watch free movies and TV shows online—explore top titles, discover new releases, and start streaming now!"
        />
        <meta
          name="description"
          content="Stream HD movies and TV series for free on Soap2Day HD. Explore, stream, and download full-length movies and shows in HD quality without registration."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Soap2Day HD™ - Online. Stream. Download."
        />
        <meta
          name="twitter:description"
          content="Stream HD movies and TV series for free on Soap2Day HD. Explore, stream, and download full-length movies and shows in HD quality without registration."
        />
        <meta
          name="twitter:image"
          content="https://soap2dayhd.vercel.app/og_image.jpg"
        />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
        <meta
          name="google-site-verification"
          content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
        />
      </Head>
      <SocialSharing />
      {/* <Script src="../../../propler/ads.js" defer /> */}
      <Script src="../../../propler/ads2.js" defer />
      <div
        className="container mx-auto mt-3 text-center"
        style={{ marginTop: "50px", textShadow: "1px 1px 0px #000" }}
      >
        <div className="container">
          <div className="content">
            <h1 className="title">Soap2Day HD™ - Online. Stream. Download.</h1>

            <a
              href="https://t.me/watchmovietvshow/"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-link"
              style={{
                display: "block",
                textAlign: "center",
                margin: "0 auto",
                marginTop: "20px",
              }}
            >
              <p
                style={{ display: "inline-block" }}
                className=" title text-2xl font-bold"
              >
                For Request or Demand <br />
                Movies & TV Series Join Telegram
                <i
                  className="fab fa-telegram telegram-icon"
                  style={{ marginLeft: "8px" }}
                ></i>
              </p>
            </a>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homeSchema }}
        />
        {/* Category Tabs */}
        <ul className="flex justify-around border-b border-gray-300 mb-4 font-bold text-2xl">
          {["movie", "tvshow", "adult"].map((category) => (
            <li key={category} className="flex-1">
              <button
                className={`py-2 ${
                  currentCategory === category
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } w-full font-bold`}
                onClick={() => handleCategoryChange(category)}
                style={{ marginTop: "50px" }}
              >
                {category.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                handlePageChange(
                  currentCategory,
                  pageStates[currentCategory] - 1
                )
              }
              disabled={pageStates[currentCategory] === 1}
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-green-500 text-white hover:bg-green-800"
              style={{ textShadow: "1px 1px 0px #000" }}
            >
              Prev
            </button>

            <span className="px-4">{`Page ${pageStates[currentCategory]} of ${totalPages}`}</span>
            <button
              onClick={() =>
                handlePageChange(
                  currentCategory,
                  pageStates[currentCategory] + 1
                )
              }
              disabled={pageStates[currentCategory] === totalPages}
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-blue-500 text-white hover:bg-blue-800"
              style={{ textShadow: "1px 1px 0px #000" }}
            >
              Next
            </button>
          </div>
        )}

        {/* Movie Grid */}
        <div className="flex flex-wrap">{renderItems()}</div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                handlePageChange(
                  currentCategory,
                  pageStates[currentCategory] - 1
                )
              }
              disabled={pageStates[currentCategory] === 1}
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-green-500 text-white hover:bg-green-800"
              style={{ textShadow: "1px 1px 0px #000" }}
            >
              Prev
            </button>

            <span className="px-4">{`Page ${pageStates[currentCategory]} of ${totalPages}`}</span>
            <button
              onClick={() =>
                handlePageChange(
                  currentCategory,
                  pageStates[currentCategory] + 1
                )
              }
              disabled={pageStates[currentCategory] === totalPages}
              className="px-3 py-1 mx-1 border rounded disabled:opacity-100 bg-blue-500 text-white hover:bg-blue-800"
              style={{ textShadow: "1px 1px 0px #000" }}
            >
              Next
            </button>
          </div>
        )}
        <style jsx>{`
          .title {
            font-size: 1.25rem;
            font-weight: 900;
            margin-bottom: 1rem;
            text-transform: uppercase;
            text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
          }

          .telegram-icon {
            color: #0088cc;
            margin-left: 10px;
            font-size: 2rem;
            animation: pulse 1.5s infinite;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          @media (min-width: 768px) {
            .title {
              font-size: 1rem;
            }
          }

          @media (min-width: 1024px) {
            .title {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

// SSG: Get static props at build time
export async function getStaticProps() {
  // Categorize items from the JSON
  const categorizedItems = { movie: [], tvshow: [], adult: [] };

  movies.forEach((item) => {
    if (item.badge && item.badge.includes("[ Movie ]")) {
      categorizedItems.movie.push({ id: item.id, image: item.image });
    } else if (item.badge && item.badge.includes("[ TV Show ]")) {
      categorizedItems.tvshow.push({ id: item.id, image: item.image });
    } else if (item.badge && item.badge.includes("[ Adult ]")) {
      categorizedItems.adult.push({ id: item.id, image: item.image });
    }
  });

  return {
    props: {
      categorizedItems, // Pass the categorized items as props to the component
    },
  };
}

export default HomePage;