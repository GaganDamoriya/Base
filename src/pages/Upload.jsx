import React, { useState } from "react";
import "./style.css";
import { IoIosNotifications } from "react-icons/io";
import Avtar from "../assets/tom.jpg";
import { FaUpload } from "react-icons/fa";
import DragNDrop from "../components/DragNDrop";

const Upload = () => {
  const [uploadedCsvData, setUploadedCsvData] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCsvDataChange = (csvData) => {
    setUploadedCsvData(csvData);
  };

  const parseCsvData = (csvData) => {
    return csvData
      .split("\n")
      .map((row) => {
        const [id, link, prefix, selectTagsString] = row.split(",");

        // Extract individual tags from the comma-separated string
        const selectTags = selectTagsString
          .split(", ")
          .map((tag) => tag.trim());

        return {
          id,
          link,
          prefix,
          selectTags,
        };
      })
      .filter((item) => item.id && item.link && item.prefix && item.selectTags);
  };

  const handleTagSelect = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((prevTag) => prevTag !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="upload-page">
      <div className="header">
        <span style={{ fontSize: "1.9rem", fontWeight: "500" }}>
          Upload CSV
        </span>
        <span style={{ display: "flex", gap: "10px" }}>
          <IoIosNotifications size={"1.8rem"} />
          <img src={Avtar} alt="profile-pic" />
        </span>
      </div>
      <div className="dnd-div">
        <DragNDrop onCsvDataChange={handleCsvDataChange} />
        <button>
          <FaUpload /> Upload
        </button>
      </div>

      {/* Display uploaded CSV data in a table */}
      <div className="display_data ">
        {uploadedCsvData && (
          <div>
            <h3>Uploaded CSV Data:</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Links</th>
                  <th>Prefix</th>
                  <th>Select Tags</th>
                  <th>Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {parseCsvData(uploadedCsvData).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.id}</td>
                    <td>{row.link}</td>
                    <td>{row.prefix}</td>
                    <td>
                      <div>
                        {row.selectTags.map((tag, tagIndex) => (
                          <label key={tagIndex}>
                            <input
                              type="checkbox"
                              value={tag}
                              checked={selectedTags.includes(tag)}
                              onChange={() => handleTagSelect(tag)}
                            />
                            {tag}
                          </label>
                        ))}
                      </div>
                    </td>
                    <td>{selectedTags.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
