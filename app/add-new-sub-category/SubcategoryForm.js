import React from "react";

const SubcategoryForm = ({ data, handleInputChange,handleTagKeyPress,tagInput,tagInputRef,handleRemove }) => {
  return (
    <ul>
      <li>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                id="subcategory_name"
                name="subcategory_name"
                className="form-control"
                placeholder="Category name *"
                
                value={data.subcategory_name || ""}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div
                className="chosen-container chosen-container-multi"
                id="city_id_chosen"
                style={{ width: 640 }}
              >
                <ul className="chosen-choices">
                  {data?.tags?.length > 0 &&
                    data?.tags.map((option, index) => {
                      return (
                        <li key={index} className="search-choice">
                          <span>{option}</span>
                          <a
                            onClick={() => handleRemove(index)}
                            onKeyUp={(e) => handleTagKeyPress(e)}
                            className="search-choice-close"
                            data-option-array-index={0}
                          />
                        </li>
                      );
                    })}
                  <li className="search-field">
                    <input
                      className="chosen-search-input default"
                      type="text"
                      placeholder="enter tags"
                      autoComplete="off"
                      value={tagInput}
                      ref={tagInputRef}
                      name="tag"
                      onKeyUp={(e) => handleTagKeyPress(e)}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SubcategoryForm;
