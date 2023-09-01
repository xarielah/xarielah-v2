import MainPage from "../components/layout/main-page";

import contactPageData from "../lib/json/contact.json";

const Contact = () => {
  return (
    <MainPage title={contactPageData.title} content={contactPageData.content}>
      <form className="flex flex-col gap-6">
        <input placeholder="Name of the addresser" className="input" />
        <input placeholder="Ways to reach back to you" className="input" />
        <textarea
          rows={6}
          placeholder="Write down your input"
          className="input"
        />
        <button className="btn mx-auto" type="submit">
          Ship That Letter
        </button>
      </form>
    </MainPage>
  );
};

export default Contact;
