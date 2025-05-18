/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import "./style.css";

const AccordionItem = ({ handleToggle, active, item }) => {
  const contentEl = useRef(null);
  const { stockSymbol, id } = item;

  return (
    <div className="rc-accordion-card">
      <header className={active === id ? "active" : ""} onClick={() => handleToggle(id)}>
        <h2>{stockSymbol}</h2>
        <span className="material-symbols-outlined">
          <KeyboardArrowDownIcon />
        </span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={active === id ? { height: contentEl?.current?.scrollHeight } : { height: "0px" }}
      >
        <p>Stock Symbol: {stockSymbol}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [active, setActive] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/watchlist/${userId}`);
        setWatchlist(response.data.watchlist);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <article>
      {watchlist.map((item) => (
        <AccordionItem key={item.id} active={active} handleToggle={handleToggle} item={item} />
      ))}
      <Dialog>
        <DialogContent className="sm:max-w-[400px] text-white bg-slate-950">
          <div className="grid py-4">
            <Input id="name" className="col-span-5 text-black" width="full" placeholder="Enter stock symbol" />
          </div>
          <DialogFooter>
            <Button className="bg-blue-500 hover:bg-blue-900" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </article>
  );
};

export default Accordion;
