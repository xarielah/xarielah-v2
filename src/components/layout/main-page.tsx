import { ReactNode } from "react";
import { motion } from "framer-motion";
import { BsPersonCircle, BsCalendar4Week } from "react-icons/bs";

const MainPage = ({
  title,
  content,
  author = "xarielah",
  children,
}: MainPageProps) => {
  return (
    <motion.article
      initial={{ y: 200, opacity: 0 }}
      exit={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="col-span-4 lg:col-span-3 h-full px-6 overflow-scroll overflow-x-hidden scrollbar-none max-h-[calc(100vh-196px)]"
    >
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-5xl">{title}</h1>
        <span className="text-sm dark:text-gray-200 text-slate-700 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <BsPersonCircle /> {author}
          </div>
          <div className="flex items-center gap-2">
            <BsCalendar4Week />
            01/01/1970
          </div>
        </span>
        <hr />
      </div>

      <p
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br/>") }}
      ></p>

      <div>{children}</div>
    </motion.article>
  );
};

interface MainPageProps {
  title: string;
  content: string;
  author?: string;
  children?: ReactNode | ReactNode[];
}

export default MainPage;
