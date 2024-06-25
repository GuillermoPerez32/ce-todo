import { useRef, useState } from "react";
import AddSvg from "../assets/plus-square.svg";
import OpenSvg from "../assets/maximize-2.svg";
import CalendarSvg from "../assets/calendar.svg";
import UnlockSvg from "../assets/unlock.svg";
import SunSvg from "../assets/sun.svg";
import CircleSvg from "../assets/circle.svg";
import { Button } from "./Button";
import clsx from "clsx";

export const TextField = () => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isDisabled = text === "";

  return (
    <div className="pt-14 px-14">
      <div
        className={`w-full flex items-center rounded-md border px-4 pb-8 pt-2 ${
          focused ? "border-gray-200 shadow" : "border-transparent"
        }`}
      >
        <img src={AddSvg} alt="add task" />
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="focus:outline-none px-2 w-full h-full"
          placeholder="Type to add a new task"
          onFocus={() => {
            setFocused(true);
          }}
        />
      </div>
      <div
        className={clsx("p-2 shadow mt-1 flex", {
          hidden: !focused,
        })}
      >
        <Button
          classname="ml-4"
          variant="contained"
          color="secondary"
          label="Open"
          icon={OpenSvg}
          disabled={isDisabled}
        />
        <Button
          classname="ml-4"
          variant="outlined"
          color="secondary"
          label="Today"
          icon={CalendarSvg}
          disabled={isDisabled}
        />
        <Button
          classname="ml-1"
          variant="outlined"
          color="secondary"
          label="Public"
          icon={UnlockSvg}
          disabled={isDisabled}
        />
        <Button
          classname="ml-1"
          variant="outlined"
          color="secondary"
          label="Highlight"
          icon={SunSvg}
          disabled={isDisabled}
        />
        <Button
          classname="ml-1"
          variant="outlined"
          color="secondary"
          label="Estimation"
          icon={CircleSvg}
          disabled={isDisabled}
        />
        <Button
          classname="ml-auto"
          variant="contained"
          color="secondary"
          label="Cancel"
          onClick={() => {
            setFocused(false);
            setText("");
          }}
        />
        <Button
          classname="ml-1 mr-4"
          variant="contained"
          color="primary"
          label="Ok"
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};
