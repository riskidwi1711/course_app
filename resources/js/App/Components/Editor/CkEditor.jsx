import * as React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicExtended from "ckeditor5-build-classic-extended";

export default function MyCk({ initial = "edit" }) {
    return (
        <div className="App">
            <CKEditor
                editor={ClassicExtended}
                config={{
                    
                    toolbar: {
                        items: [
                            "undo",
                            "redo",
                            "|",
                            "fontsize",
                            "fontColor",
                            "|",
                            "bold",
                            "italic",
                            "strikethrough",
                            "subscript",
                            "superscript",
                            "uploadImage",  
                        ],
                    },
                }}
                data={`<p>${initial}</p>`}
                onReady={(editor) => {
                    console.log(
                        "CKEditor5 React Component is ready to use!",
                        editor
                    );
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    );
}
