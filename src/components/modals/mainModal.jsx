import closeIcon from "../../assets/img/close-button.png";

<div
  id="modalWithLink"
  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
>
  <div className="relative bg-white rounded-lg shadow-lg p-6 w-[70%] md:w-[90%] max-w-md pt-[80px] md:pt-[100px] text-center">
    <h4 className="text-primary items-center text-[18px] font-semibold mx-auto">
      Transaction Successful
    </h4>
    <p className="text-[14px] text-lightText mt-4 items-center">
      Your payment has been processed successfully.
    </p>

    <div>
      <a
        href="/dashboard"
        className="block w-full text-white text-[14px] font-semibold rounded-[10px] h-[42px] mt-6 transition-all duration-300 text-center leading-[42px] bg-primary hover:bg-primaryHover"
      >
        Go to Dashboard
      </a>
    </div>

    <img
      id="modalCloseBtn"
      className="absolute top-[20px] right-[20px] cursor-pointer"
      src={closeIcon}
      alt="Close"
    />
  </div>
</div>;
