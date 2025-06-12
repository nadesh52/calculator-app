"use client";
import { usePeople } from "@/contexts/sharebill/PeopleContext";
import { TrashIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

const PeopleTab = () => {
  const { people, setPeople } = usePeople();
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (isDisable) return;

    const newP = {
      id: query,
      name: query,
    };

    setPeople((prev: any) => {
      const updated = [...prev, newP];

      localStorage.setItem("people", JSON.stringify(updated));

      return updated;
    });

    setQuery("");
    inputRef.current?.focus();
  };

  const handleDelete = (name: string) => {
    const updatedPeople = people.filter((p: any) => p.name !== name);
    setPeople(updatedPeople);
    localStorage.setItem("people", JSON.stringify(updatedPeople)); // ถ้าใช้ localStorage ด้วย
  };

  const isDisable =
    !query?.trim() ||
    people.filter((p: any) => {
      return (
        p?.name.toLocaleLowerCase()?.trim() ===
        query?.toLocaleLowerCase()?.trim()
      );
    })?.length !== 0;

  useEffect(() => {
    const stored = localStorage.getItem("people");
    if (stored) {
      setPeople(JSON.parse(stored));
    }
  }, []);

  return (
    <article className="space-y-4 p-4">
      <div className="">
        <p className="text-secondary-100 font-medium">Add New Person</p>
        <div className="flex justify-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value.trimStart())}
            placeholder="enter name"
            className="input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isDisable) {
                handleAdd(e);
              }
            }}
          />
          <button
            disabled={isDisable}
            onClick={handleAdd}
            className="btn bg-primary flex w-20 place-content-center transition-shadow not-disabled:hover:shadow-lg disabled:cursor-not-allowed"
          >
            <UserPlusIcon className="size-6" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-secondary-100 font-medium">People Added</p>
          <div className="flex items-center justify-end gap-2 select-none">
            <button
              className="btn bg-error/60 hover:bg-error transition-all hover:shadow-lg"
              onClick={() => {
                setPeople([]);
                inputRef.current?.focus();
              }}
            >
              Clear
            </button>
          </div>
        </div>

        <ul className="flex flex-wrap gap-4">
          {people?.length
            ? people.map((p: any) => (
                <li
                  key={p.id}
                  className="flex w-fit flex-row justify-between gap-4 rounded-full bg-white px-4 py-2 shadow-md"
                >
                  <p>{p.name}</p>
                  <button
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleDelete(p.name)}
                    className="z-10"
                  >
                    <TrashIcon className="text-error/40 size-4 cursor-pointer" />
                  </button>
                </li>
              ))
            : null}
        </ul>
      </div>
    </article>
  );
};

export default PeopleTab;
