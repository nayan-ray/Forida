// import React, { useRef, useState } from "react";
// import { useClickOutside } from "../../../hook/DeteckClick";
// import { FaSearch } from "react-icons/fa";

// const SearchCom = () => {
//   const [open, setOpen] = useState(false);
//   const [borderColor, setBorderColor] = useState(true);
//   const [value, setValue] = useState("");

//   const containerRef = useRef(null);

//   useClickOutside(containerRef, () => {
//     setOpen(false);
//     setBorderColor(false);
//   });

//   const handleSelect = () => {
//     setOpen(!open);
//     setBorderColor(true);
//   };

//   const items = [
//     {
//       id: 1,
//       title: "Green",
//     },
//     {
//       id: 1,
//       title: "Red",
//     },
//     {
//       id: 1,
//       title: "Yellow",
//     },
//     {
//       id: 1,
//       title: "blue",
//     },
//   ];

//   return (
//     <div className="text-[#333]">
//       <h4 className="font-poppins text-[18px] font-semibold">Search</h4>
//       <div
//         className={`border-2 border-solid mt-2 ${borderColor ? "border-amber-500" : "border-gray-300"}`}
//         ref={containerRef}
//         onClick={handleSelect}
//       >
//         <div className="relative">
//           <button className="block w-full ">
//             <div className="flex items-center justify-between px-4 py-2 text-[14px]">
//               <span>{value.length === 0 ? "All Categories" : value}</span>
//               <span>red</span>
//             </div>
//           </button>
//           {open && (
//             <ul className="list-none border border-solid border-[#333] bg-white absolute w-full z-25 left-0 top-full max-h-70 overflow-y-scroll mt-0.5 text-[14px]">
//               {items.map((item, index) => {
//                 return (
//                   <li
//                     key={index}
//                     className={`px-4 py-1 ${value === item.title ? "bg-[#0e66a0f8] text-white" : ""} hover:bg-[#0e66a0f8] hover:text-white`}
//                     onClick={() => setValue(item.title)}
//                   >
//                     {item.title}
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </div>
//       </div>
//       <div>
//         <input
//           className="w-full outline-none border-2 border-solid border-gray-300 focus:border-amber-300 focus:outline-none mt-2 px-4 py-2 text-[14px]"
//           type="text"
//           placeholder="Enter Your Search"
//         />
//       </div>
//       <p>
//         Popular keyword : <button>dress, ...</button>
//       </p>
//       <div>
//         <div>
//           <div className="flex items-center justify-center mt-5">
//             <FaSearch size={100} />
//           </div>
//           <p className="text-center px-4 py-2 text-[14px]">
//             Please enter 3 or more keyword
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchCom;

import React, { useEffect, useId, useRef, useState } from "react";
import { useClickOutside } from "../../../hook/DeteckClick";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const items = [
  { id: 1, title: "Green" },
  { id: 2, title: "Red" },
  { id: 3, title: "Yellow" },
  { id: 4, title: "Blue" },
  { id: 5, title: "Gray" },
  { id: 6, title: "Cyrano" },
  { id: 7, title: "Yel" },
  { id: 8, title: "Blu" },
  
];

const SearchCom = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const listboxId = useId();
  const labelId = `${listboxId}-label`;

  const selectedIndex = items.findIndex((item) => item.title === value);
  const optionId = (index) => `${listboxId}-option-${index}`;

  useClickOutside(containerRef, () => setOpen(false));

  // Keep the active option visible while navigating with the keyboard
  useEffect(() => {
    if (!open || activeIndex < 0) return;
    listRef.current
      ?.querySelector(`#${CSS.escape(optionId(activeIndex))}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  const openList = () => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };

  const selectItem = (index) => {
    setValue(items[index].title);
    setActiveIndex(index);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    const last = items.length - 1;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) openList();
        else setActiveIndex((i) => Math.min(i + 1, last));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) openList();
        else setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        if (open) {
          e.preventDefault();
          setActiveIndex(0);
        }
        break;
      case "End":
        if (open) {
          e.preventDefault();
          setActiveIndex(last);
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) openList();
        else if (activeIndex >= 0) selectItem(activeIndex);
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      default: {
        // Type-ahead: jump to the next item starting with the typed letter
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const char = e.key.toLowerCase();
          const from = open ? activeIndex : selectedIndex;
          for (let step = 1; step <= items.length; step++) {
            const i = (from + step + items.length) % items.length;
            if (items[i].title.toLowerCase().startsWith(char)) {
              if (!open) setOpen(true);
              setActiveIndex(i);
              break;
            }
          }
        }
      }
    }
  };

  return (
    <div className="text-[#333]">
      <h4 id={labelId} className="font-poppins text-[18px] font-semibold">
        Search
      </h4>

      <div
        ref={containerRef}
        className="border-2 border-solid mt-2 border-gray-300 focus-within:border-amber-500"
      >
        <div className="relative">
          <button
            type="button"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-labelledby={labelId}
            aria-activedescendant={
              open && activeIndex >= 0 ? optionId(activeIndex) : undefined
            }
            className="block w-full outline-none"
            onClick={() => (open ? setOpen(false) : openList())}
            onKeyDown={handleKeyDown}
            onBlur={() => setOpen(false)}
          >
            <div className="flex items-center justify-between px-4 py-2 text-[14px]">
              <span>{value || "All Categories"}</span>
              <FaChevronDown
                aria-hidden="true"
                size={12}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {open && (
            <ul
              id={listboxId}
              ref={listRef}
              role="listbox"
              aria-labelledby={labelId}
              // keeps focus on the button when clicking the list / scrollbar
              onMouseDown={(e) => e.preventDefault()}
              // when the mouse leaves, fall back to highlighting the selected item
              onMouseLeave={() => setActiveIndex(selectedIndex)}
              className="list-none border border-solid border-[#333] bg-white absolute w-full z-25 left-0 top-full max-h-70 overflow-y-auto mt-0.5 text-[14px]"
            >
              {items.map((item, index) => {
                const isSelected = index === selectedIndex;
                const isActive = index === activeIndex;

                return (
                  <li
                    key={item.id}
                    id={optionId(index)}
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectItem(index)}
                    className={`px-4 py-1 cursor-pointer ${
                      isActive ? "bg-[#0e66a0f8] text-white" : ""
                    } ${isSelected ? "font-semibold" : ""}`}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div>
        <input
          aria-label="Enter your search"
          className="w-full outline-none border-2 border-solid border-gray-300 focus:border-amber-300 focus:outline-none mt-2 px-4 py-2 text-[14px]"
          type="text"
          placeholder="Enter Your Search"
        />
      </div>

      <p>
        Popular keyword : <button type="button">dress, ...</button>
      </p>

      <div>
        <div className="flex items-center justify-center mt-5">
          <FaSearch size={100} aria-hidden="true" />
        </div>
        <p className="text-center px-4 py-2 text-[14px]">
          Please enter 3 or more keyword
        </p>
      </div>
    </div>
  );
};

export default SearchCom;