import Identification from "../components/Identification";
import Financial from "../components/Financial";
import Bank from "../components/Bank";
import Gst from "../components/Gst";
import Bureau from "../components/Bureau";


const documentStep = [
    {
      id: 1,
      tag: "Identification Documents",
      content: {
        title: "Identification Documents",
        description:
          "Please upload clear copies of your PAN and Aadhar card to verify your identity. Ensure the documents are up-to-date and legible.",
      },
      component: <Identification />
    },
    {
      id: 2,
      tag: "Financial Statements",
      content: {
        title: "Financial Statements",
        description:
          "Upload your most recent financial statements covering the last fiscal year, including all assets, liabilities, income, and expenses.",
      },
      component: <Financial />
    },

    {
      id: 3,
      tag: "Bank Statements",
      content: {
        title: "Bank Statements",
        description:
          "Upload your bank account statements for the past 6 months. Ensure that the statements are clear and include account details, transaction history, and balances.",
      },
      component: <Bank />
    },

    {
      id: 4,
      tag: "GST Information",
      content: {
        title: "GST Information",
        description:
          "Please connect to your GST portal to automatically fetch your GST filings. This ensures we have accurate sales and tax data.",
      },
      component: <Gst />
    },

    {
      id: 5,
      tag: "Bureau Data",
      content: {
        title: "Bureau Data",
        description:
          "Enter your PAN number to fetch your credit bureau report automatically. Click on 'Fetch Report' to retrieve the data from our external partner",
      },
      component: <Bureau />
    },
  ];

  export default documentStep;