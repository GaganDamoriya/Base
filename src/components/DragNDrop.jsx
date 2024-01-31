import React, { useState, useRef } from "react";
import sheets from "../assets/sheets.png";

const DragNDrop = ({ onCsvDataChange }) => {
  const [csvData, setCsvData] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileRead = (event) => {
    const content = event.target.result;
    setCsvData(content);
    onCsvDataChange(content); // Pass the CSV data to the parent component
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = handleFileRead;
      reader.readAsText(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = handleFileRead;
      reader.readAsText(file);
    }
  };

  return (
    <div className="dragNdrop">
      <div
        className="inner-div"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={handleDrop}
      >
        <img src={sheets} alt="sheet" />
        <span>
          {fileName ? (
            ` ${fileName} . `
          ) : (
            <span>
              Drop your excel sheet here or{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={handleBrowseClick}
              >
                browse
              </span>
            </span>
          )}
        </span>
        {csvData ? (
          <span
            className="remove-btn"
            style={{ color: "red" }}
            onClick={() => {
              setFileName("");
              setCsvData(null);
              onCsvDataChange(null); // Pass null to indicate removal
            }}
          >
            Remove
          </span>
        ) : (
          ""
        )}
      </div>

      {/* Actual file input element */}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default DragNDrop;
