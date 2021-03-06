const React = require('react');
const TextValidator = require('../util/validation/text-validator-container');
const Alert = require('../util/alert/alert');

const AddConstituencies = React.createClass({
  // Added for CSV import
  onUploadMultiCandidateFile: function() {
    this.props.onUploadMultiCandidateFile( this.refs.file.files[0] );
  },

  render: function() {
	  var greeting;
	  var fileInput;
	  var buttonText;

	  if(this.props.constituency.id  == "") {
	  	greeting = <h4 className="alert alert-info">Registruoti naują apygardą</h4>;
	 	  buttonText = "Registruoti";
	  } else {
		  greeting = <h4 className="alert alert-info">Redaguoti apygardą</h4>;
		  buttonText = "Redaguoti";
	  }

	  if(this.props.candidates.length != 0) {
	 	  fileInput = (
        <div>
          <label style={{ marginRight: '20px' }}>Kandidatų sąrašas įkeltas</label>
   				<button className="btn btn-danger btn-sm"
	              onClick={this.props.onDeleteClick}>Ištrinti kandidatus
          </button>
        </div>
      );
	  } else {
		  fileInput= (
        <div className="form-group">
          <label>Prisegti apygardos kandidatų sąrašą &nbsp;
				    <span className="bg-danger">CSV</span> formatu:
          </label>
     			<input type="file" ref='file' onChange={this.onUploadMultiCandidateFile} />
     		</div>
      );
	  }
    return (
      <div className="container-fluid">
        <Alert text={this.props.text} style={"alert alert-danger alert-dismissable text-center"} />
        <div className="col-sm-offset-1 col-sm-10">
          <form autoComplete="off">
            {greeting}
            <br />
            <div className="form-group">
              <label>Pavadinimas</label>
              <TextValidator
                  handleValidStateChange={this.props.handleValidStateChange}>
                <input id="pavadinimas" className="form-control" type="text" value={this.props.constituency.name}
                  onChange={this.props.onFieldChange('name')} />
              </TextValidator>
            </div>
            {fileInput}
            <button className="btn btn-success btn-sm" style={{ marginRight: '20px' }}
              onClick={this.props.onSaveClick} disabled={this.props.isSubmit}>{buttonText}
            </button>
            <button className="btn btn-danger btn-sm"
              onClick={this.props.onCancelClick}>Atšaukti
            </button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = AddConstituencies;
