import "./App.css";
import Grid from "./Grid";
import myData from "./locales/th/common.json";

function App() {
  const newData = {};

  newData.documents_img_title = myData.documents_title;
  newData.sheets_img_title = myData.sheets_title;
  newData.pdf_img_title = myData.pdf_title;
  newData.mail_img_title = myData.mail_title;
  newData.slides_img_title = myData.slides_title;

  newData.file_formats_shouldnt = myData["100_msoffice_compatible"];
  newData.need_a_free_office_app = myData.available_any_device;
  newData.enjoy_office_suites_free = myData.pdf_work_easy;
  newData.enjoy_secure_cloud_storage = myData.multiple_cloud_services;

  newData.continue_working_cross = myData.on_the_move;

  newData.office_suite_documents_is_a_practical = myData.documents_title;
  newData.be_the_architect_of_your = "";

  newData.office_suite_documents_ensure_effective =
    myData.track_changes_smooth_workflow;
  newData.get_creative_with_office_suite =
    myData.rich_page_paragraph_formatting;
  newData.make_your_word_docs = myData.illustrate_complex_points;
  newData.office_suite_documents_is_compatible =
    myData.compatible_msoffice_openoffice;

  newData.on_the_go_take_your_microsoft = myData.on_the_move;

  newData.find_the_meaning_of_numbers_with = myData.sheets_title;
  newData.analyze_data_with_office_suite_sheets = "";

  newData.visualize_data_with_office_suite_sheets =
    myData.illustrate_your_data_charts;
  newData.make_in_depth_data_analysis_of = myData.use_250_functions;
  newData.collaborate_with_your_team_on_microsoft =
    myData.collaborate_job_done_quicker;
  newData.office_suite_sheets_is_compatible_with_microsoft =
    myData.compatible_msoffice_CSV_formats;

  newData.continue_analyzing_microsoft_excel_sheet = myData.on_the_move;

  newData.office_suite_slides_is_a_powerful_editor_for = myData.slides_title;
  newData.captivate_audiences_anywhere_with_office_suite_slides = "";

  newData.create_vivid_ms_office_power_point_presentations =
    myData.create_presentation_illustrate_ideas;
  newData.highlight_points_in_office_suite_slides_by =
    myData.captivate_audiences_multimedia_elements;
  newData.present_confidently_with_the_presenter_mode =
    myData.present_work_authority_composure;
  newData.convert_your_office_suite_slides_presentations_to_pdf =
    myData.convert_pdf_upload_mobidrive;

  newData.take_your_office_suite_slides_for_a_ride_with_the =
    myData.on_the_move;

  newData.get_a_360_view_of_all = myData.mail_title;
  newData.office_suite_mail_lets_you_connect = "";

  newData.compose_beautiful_well_formatted =
    myData.compose_emails_tailored_audience;
  newData.office_suite_mail_connects_all = myData.connect_accounts_one_place;
  newData.continue_working_with_your_email = myData.organize_Inbox_offline;
  newData.get_a_full_view_of_your_calendar = myData.manage_schedule_day;

  newData.officesuite_is_built_for_use_across = myData.on_the_move;

  newData.Fill_sign_create_read_edit = myData.pdf_title;
  newData.the_office_suite_pdf_editor_allows = "";

  newData.office_suite_pdf_enhances_collaborative =
    myData.control_coordinating_team_efforts;
  newData.secure_your_important_pd_fs_with =
    myData.secure_important_pdfs_passwords;
  newData.protect_your_pdf_security_with =
    myData.protect_documents_digital_signatures;
  newData.the_office_suite_pdf_editor_for =
    myData.convert_pdfs_editable_word_excel_epub;

  newData.access_your_important_pdf_files_anywhere = myData.on_the_move;

  newData.join_the_office_suite_affiliate_program = "";

  return (
    <div className="App">
      <textarea
        height="300"
        rows="10"
        lines="10"
        value={JSON.stringify(newData)}
      />
      <header className="App-header">
        <Grid />
      </header>
      <textarea />
    </div>
  );
}

export default App;
