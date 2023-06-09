"use client";
import { marked } from "marked";
//import 'marked/lib/marked.css';
import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [html, setHtml] = useState();
  const [textareaInput, setTextareaInput] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.discordapp.com/attachments/1106113737968070677/1106571466549502042/image.png)`);
  
  const [editorFullScreen, setEditorFullScreen] = useState(false);
  const [previewerFullScreen, setPreviewFullScreen] = useState(false);

  const handleTextareaInput = (event) => {
    setTextareaInput(event.target.value);
    let inputToHtml = marked(event.target.value);
    setHtml(inputToHtml);
  };

  useEffect(() => {
    let inputToHtml = marked(textareaInput);
    setHtml(inputToHtml);
  }, []);

  const editorFullScreenHandler = () => {
    setEditorFullScreen(!editorFullScreen);
  };
  const previewerFullScreenHandler = () => {
    setPreviewFullScreen(!previewerFullScreen);
  };

  return (
    <main className="flex min-h-screen flex-col overflow-auto items-center py-4 bg-[#88b5b3]">
      {/* editooorrrrrrrr */}
      {!previewerFullScreen && (
        <div
          id="editorwrap"
          className="w-[600px] shadow-custom max-w-[80%] mb-6"
        >
          {/* tooolbaarrrrrrrr */}
          <div
            id="editorToolbar"
            className=" bg-[#45a6a1] h-10 border border-black flex justify-between items-center p-2 w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 20 20"
              className="w-5 h-5 ml-0 mr-2"
            >
              <path fill="none" d="M0 0h20v20H0z" />
              <path d="M2 3h16v2H2V3zm0 4h16v2H2V7zm0 4h16v2H2v-2zm0 4h16v2H2v-2z" />
            </svg>
            <spam className="text-black font-extrabold text-lg mr-auto">
              Editor
            </spam>

            {editorFullScreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 32 32"
                className="w-5 h-5 hover:fill-blue-700 hover:cursor-pointer"
                onClick={editorFullScreenHandler}
              >
                <path d="m11.975 10.838-.021-7.219c-.009-.404-.344-.644-.748-.654l-.513-.001c-.405-.009-.725.343-.716.747l.028 4.851L1.684.32A.999.999 0 1 0 .27 1.734l8.285 8.207-4.721.012a.822.822 0 0 0-.84.746l.001.513c.01.405.344.739.748.748l7.172-.031c.008.001.013.003.02.003l.366.008a.691.691 0 0 0 .512-.205c.132-.13.178-.311.175-.514l-.04-.366c.001-.007.027-.012.027-.019zm8.212.898c.129.13.311.21.512.205l.366-.008c.007 0 .012-.002.02-.004l7.172.031a.772.772 0 0 0 .747-.748l.001-.513a.822.822 0 0 0-.84-.746l-4.721-.012 8.285-8.207A.999.999 0 1 0 30.315.32l-8.32 8.241.027-4.851c.009-.404-.311-.756-.715-.747l-.513.001c-.405.01-.739.25-.748.654l-.021 7.219c0 .007.027.012.027.02l-.04.366c-.005.203.043.384.174.514zm-8.374 8.496a.693.693 0 0 0-.512-.205l-.366.009c-.007 0-.012.003-.02.003l-7.173-.032a.772.772 0 0 0-.748.747l-.001.514c.062.476.436.755.84.745l4.727.012-8.29 8.238a.999.999 0 1 0 1.414 1.414l8.321-8.268-.028 4.878c-.009.404.312.756.716.747l.513-.001c.405-.01.739-.25.748-.654l.021-7.219c0-.007-.027-.011-.027-.019l.04-.397c.005-.203-.043-.384-.174-.514zm11.626 1.796 4.727-.012a.822.822 0 0 0 .84-.745l-.001-.514a.773.773 0 0 0-.748-.748h-7.172c-.008 0-.013-.003-.02-.003l-.428-.009c-.201-.006-.384.136-.512.267-.131.13-.178.311-.174.514l.04.366c0 .008-.027.012-.027.019l.021 7.219c.009.404.343.644.748.654l.544.001c.404.009.725-.343.715-.747l-.027-4.829 8.352 8.22a.999.999 0 1 0 1.414-1.414z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 32 32"
                className="w-5 h-5 hover:fill-blue-700 hover:cursor-pointer"
                onClick={editorFullScreenHandler}
              >
                <path d="m21.434 11.975 8.602-8.549-.028 4.846c-.009.404.311.755.716.746l.513-.001c.404-.009.739-.25.748-.654l.021-7.219c0-.007-.027-.012-.027-.019l.04-.366c.004-.203-.044-.384-.174-.513a.688.688 0 0 0-.512-.204l-.366.009c-.007 0-.012.003-.02.004L23.775.023a.77.77 0 0 0-.747.748l-.001.513a.822.822 0 0 0 .84.746l4.726.013-8.572 8.52a1 1 0 1 0 1.414 1.415zm-10.837 8.05-8.602 8.523.027-4.82c.01-.404-.312-.756-.716-.747l-.544.001c-.405.01-.739.25-.748.654l-.021 7.219c0 .007.028.011.028.019l-.04.365c-.005.203.043.385.174.514.129.131.311.21.512.205l.366-.009c.007 0 .012-.003.02-.003l7.203.032a.774.774 0 0 0 .748-.748l.001-.514c-.062-.476-.436-.755-.84-.746l-4.726-.012 8.571-8.518a1 1 0 0 0-1.413-1.414zm21.41 10.83-.021-7.219c-.009-.404-.343-.645-.747-.654l-.513-.001c-.404-.009-.725.343-.716.747l.028 4.846-8.602-8.549a1 1 0 0 0-1.414 1.414l8.571 8.518-4.726.012a.822.822 0 0 0-.84.746l.001.514a.772.772 0 0 0 .747.748l7.172-.032c.008 0 .013.003.02.003l.366.009a.69.69 0 0 0 .512-.205c.131-.129.178-.311.174-.514l-.04-.365c0-.008.027-.012.027-.019zM3.439 2.041l4.727-.012c.404.009.778-.27.84-.746L9.005.77a.772.772 0 0 0-.748-.748L1.053.053C1.045.052 1.04.049 1.033.049L.667.04a.694.694 0 0 0-.512.204c-.132.13-.179.31-.174.514l.04.366c0 .007-.028.012-.028.02l.021 7.219c.009.404.343.645.748.654l.545.001c.404.009.724-.342.715-.746l-.028-4.819 8.602 8.523a1 1 0 0 0 1.414-1.415z" />
              </svg>
            )}
          </div>
          {/* texttareaaaaaaaaaaaaa */}
          <textarea
            id="editor"
            className={`bg-[#c9e0df] w-full border border-black -mb-2 min-h-[200px] p-2 text-sm font-mono focus:outline-none
            ${editorFullScreen ? "h-screen" : "h-52"}
            `}
            value={textareaInput}
            onChange={handleTextareaInput}
          ></textarea>
        </div>
      )}
      {/* prevvviewwwwwwww */}
      {!editorFullScreen && (
        <div id="preview" className="w-[900px] shadow-custom max-w-[80%]">
          {/* tooolbaarrrrrrrr */}
          <div
            id="editorToolbar"
            className=" bg-[#45a6a1] h-10 border border-black flex justify-between items-center p-2 w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 20 20"
              className="w-5 h-5 ml-0 mr-2"
            >
              <path fill="none" d="M0 0h20v20H0z" />
              <path d="M2 3h16v2H2V3zm0 4h16v2H2V7zm0 4h16v2H2v-2zm0 4h16v2H2v-2z" />
            </svg>
            <spam className="text-black font-extrabold text-lg mr-auto">
              Previewer
            </spam>
            
            {previewerFullScreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 32 32"
                className="w-5 h-5 hover:fill-blue-700 hover:cursor-pointer"
                onClick={previewerFullScreenHandler}
              >
                <path d="m11.975 10.838-.021-7.219c-.009-.404-.344-.644-.748-.654l-.513-.001c-.405-.009-.725.343-.716.747l.028 4.851L1.684.32A.999.999 0 1 0 .27 1.734l8.285 8.207-4.721.012a.822.822 0 0 0-.84.746l.001.513c.01.405.344.739.748.748l7.172-.031c.008.001.013.003.02.003l.366.008a.691.691 0 0 0 .512-.205c.132-.13.178-.311.175-.514l-.04-.366c.001-.007.027-.012.027-.019zm8.212.898c.129.13.311.21.512.205l.366-.008c.007 0 .012-.002.02-.004l7.172.031a.772.772 0 0 0 .747-.748l.001-.513a.822.822 0 0 0-.84-.746l-4.721-.012 8.285-8.207A.999.999 0 1 0 30.315.32l-8.32 8.241.027-4.851c.009-.404-.311-.756-.715-.747l-.513.001c-.405.01-.739.25-.748.654l-.021 7.219c0 .007.027.012.027.02l-.04.366c-.005.203.043.384.174.514zm-8.374 8.496a.693.693 0 0 0-.512-.205l-.366.009c-.007 0-.012.003-.02.003l-7.173-.032a.772.772 0 0 0-.748.747l-.001.514c.062.476.436.755.84.745l4.727.012-8.29 8.238a.999.999 0 1 0 1.414 1.414l8.321-8.268-.028 4.878c-.009.404.312.756.716.747l.513-.001c.405-.01.739-.25.748-.654l.021-7.219c0-.007-.027-.011-.027-.019l.04-.397c.005-.203-.043-.384-.174-.514zm11.626 1.796 4.727-.012a.822.822 0 0 0 .84-.745l-.001-.514a.773.773 0 0 0-.748-.748h-7.172c-.008 0-.013-.003-.02-.003l-.428-.009c-.201-.006-.384.136-.512.267-.131.13-.178.311-.174.514l.04.366c0 .008-.027.012-.027.019l.021 7.219c.009.404.343.644.748.654l.544.001c.404.009.725-.343.715-.747l-.027-4.829 8.352 8.22a.999.999 0 1 0 1.414-1.414z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 32 32"
                className="w-5 h-5 hover:fill-blue-700 hover:cursor-pointer"
                onClick={previewerFullScreenHandler}
              >
                <path d="m21.434 11.975 8.602-8.549-.028 4.846c-.009.404.311.755.716.746l.513-.001c.404-.009.739-.25.748-.654l.021-7.219c0-.007-.027-.012-.027-.019l.04-.366c.004-.203-.044-.384-.174-.513a.688.688 0 0 0-.512-.204l-.366.009c-.007 0-.012.003-.02.004L23.775.023a.77.77 0 0 0-.747.748l-.001.513a.822.822 0 0 0 .84.746l4.726.013-8.572 8.52a1 1 0 1 0 1.414 1.415zm-10.837 8.05-8.602 8.523.027-4.82c.01-.404-.312-.756-.716-.747l-.544.001c-.405.01-.739.25-.748.654l-.021 7.219c0 .007.028.011.028.019l-.04.365c-.005.203.043.385.174.514.129.131.311.21.512.205l.366-.009c.007 0 .012-.003.02-.003l7.203.032a.774.774 0 0 0 .748-.748l.001-.514c-.062-.476-.436-.755-.84-.746l-4.726-.012 8.571-8.518a1 1 0 0 0-1.413-1.414zm21.41 10.83-.021-7.219c-.009-.404-.343-.645-.747-.654l-.513-.001c-.404-.009-.725.343-.716.747l.028 4.846-8.602-8.549a1 1 0 0 0-1.414 1.414l8.571 8.518-4.726.012a.822.822 0 0 0-.84.746l.001.514a.772.772 0 0 0 .747.748l7.172-.032c.008 0 .013.003.02.003l.366.009a.69.69 0 0 0 .512-.205c.131-.129.178-.311.174-.514l-.04-.365c0-.008.027-.012.027-.019zM3.439 2.041l4.727-.012c.404.009.778-.27.84-.746L9.005.77a.772.772 0 0 0-.748-.748L1.053.053C1.045.052 1.04.049 1.033.049L.667.04a.694.694 0 0 0-.512.204c-.132.13-.179.31-.174.514l.04.366c0 .007-.028.012-.028.02l.021 7.219c.009.404.343.645.748.654l.545.001c.404.009.724-.342.715-.746l-.028-4.819 8.602 8.523a1 1 0 0 0 1.414-1.415z" />
              </svg>
            )}
          </div>

          {/* texttareaaaaaaaaaaaaa */}
          <div
            id="content"
            className={`bg-[#c9e0df] w-full  border border-black -mb-2 min-h-[150px] p-4
            ${previewerFullScreen ? "h-full" : ""}
            `}
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      )}
    </main>
  );
}
