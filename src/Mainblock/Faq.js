import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
        },
        {
            title: "What is the package version",
            content: "v1.0.5"
        }],
        styles:{
            titleTextSize: '32px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingTop: '10px',
        }
}


function Faqcomponent() {
    return (
        <>
            <Faq data={data} />
        </>
    )
}


export default Faqcomponent
