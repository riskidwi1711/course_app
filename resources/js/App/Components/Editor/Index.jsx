import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

export default function TextEditorInline() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <div className="p-4">
            <Editor
            inline={true}
            onLoadContent={(e) => console.log(e)}
            apiKey="wxrbxccrmkxyhzj8c1ow7xxu1yjdmmaiaqr3ooxjjllolhq2"
            onInit={(evt, editor) => (editorRef.current = editor)}
            onExecCommand={(e) => console.log(e)}
            onEditorChange={(e) => console.log(e)}
            className="p-4"
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
                height: 100,
                inline_styles: true,
                menubar: false,
                draggable_modal: true,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                ],
                toolbar: "undo redo | bold italic superscript strikethrough subscript | align | outdent indent",
                content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px, padding: 20px; }",
                toolbar_location: 'auto'
            }}
        />
        </div>
    );
}
