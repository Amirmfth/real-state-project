function ItemList({ data }) {
  return (
    <>
      {data.length ? (
        <ul className="list-disc marker:text-[#304ffe] pr-5 mb-12">
          {data.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      ) : (
        <p className="mb-12 text-justify">هیج موردی ذکر نشده است</p>
      )}
    </>
  );
}

export default ItemList;

