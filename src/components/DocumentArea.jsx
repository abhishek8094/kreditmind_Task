
import UploadDocument from "./UploadDocument";

const DocumentArea = ({currentStep, setCurrentstep}) => {
 
  const documentStep = [
    {
      id: 1,
      tag: "Identification Documents",
      content: {
        title: "Identification Documents",
        description:
          "Please upload clear copies of your PAN and Aadhar card to verify your identity. Ensure the documents are up-to-date and legible.",
      },
    },
    {
      id: 2,
      tag: "Financial Statements",
      content: {
        title: "Financial Statements",
        description:
          "Upload your most recent financial statements covering the last fiscal year, including all assets, liabilities, income, and expenses.",
      },
    },

    {
      id: 3,
      tag: "Bank Statements",
      content: {
        title: "Bank Statements",
        description:
          "Upload your bank account statements for the past 6 months. Ensure that the statements are clear and include account details, transaction history, and balances.",
      },
    },

    {
      id: 4,
      tag: "GST Information",
      content: {
        title: "GST Information",
        description:
          "Please connect to your GST portal to automatically fetch your GST filings. This ensures we have accurate sales and tax data.",
      },
    },

    {
      id: 4,
      tag: "Bureau Data",
      content: {
        title: "Bureau Data",
        description:
          "Enter your PAN number to fetch your credit bureau report automatically. Click on 'Fetch Report' to retrieve the data from our external partner",
      },
    },
  ];

  //   console.log(documentStep);
  return (
    <>
      <div className="flex gap-10 mt-8">
        {documentStep.map((document, id) => (
          <div key={id}>
            <div className="border-2 p-2 text-xs font-semibold rounded-full bg-[white] ">
              <h4>{document.tag}</h4>
            </div>

            {id < documentStep.length - 1 && (
              <hr className="border-gray-500 relative bottom-4 left-20 -z-10" />
            )}
          </div>
        ))}
      </div>
      <div className="border border-gray-200 h-80 relative top-10 rounded-lg">
        <div className="p-4">
          <h4 className="text-xl font-bold">
            {documentStep[currentStep - 1].content.title}
          </h4>
          <p className="text-[#8b8b8b] text-sm">
            {documentStep[currentStep - 1].content.description}
          </p>
          <UploadDocument />
        </div>
      </div>
    </>
  );
};

export default DocumentArea;
