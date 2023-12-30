import * as React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicExtended from "ckeditor5-build-classic-extended";

export default function MyCk({ initial = "edit", onDataChange = ()=>{} }) {
    console.log(initial)
    return (
        <div className="App">
            <CKEditor
                editor={ClassicExtended}
                config={{
                    toolbar: {
                        items: [
                            "undo",
                            "redo",
                            "imageUpload",  
                            "|",
                            "fontsize",
                            "fontColor",
                            "|",
                            "bold",
                            "italic",
                            "strikethrough",
                            "subscript",
                            "superscript",
                        ],
                    },
                    image: {
                        toolbar: [
                            'imageTextAlternative',
                            'imageStyle:full',
                            'imageStyle:side'
                        ]
                    },
                }}
                data={initial}
                onReady={(editor) => {
                    console.log(
                        "CKEditor5 React Component is ready to use!",
                        editor
                    );
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onDataChange(data)
                }}
            />
        </div>
    );
}
