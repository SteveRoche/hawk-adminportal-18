import React, { Component } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import validator from "validator";

class User extends Component {
	constructor(props) {
		super(props);
		this.triggerEditCallback = this.triggerEditCallback.bind(this);
		this.toggleEditing = this.toggleEditing.bind(this);
		this.triggerDeleteCallback = this.triggerDeleteCallback.bind(this);
		this.triggerBanToggleCallback = this.triggerBanToggleCallback.bind(this);
		this.state = {
			isEditing: false,
			email: this.props.userData.email,
			tel: this.props.userData.tel,
			access: this.props.userData.access,
			college: this.props.userData.college,
			banned: this.props.userData.banned
		};
	}

	toggleEditing(e) {
		e.preventDefault();
		if (this.state.isEditing) {
			this.triggerEditCallback(e);
		}
		this.setState({ isEditing: !this.state.isEditing });
	}

	triggerEditCallback(e) {
		e.preventDefault();
		this.setState(
			{
				email: validator.isEmail(this.getEmail.value) ? this.getEmail.value : this.state.email,
				tel: validator.isMobilePhone(this.getTel.value) ? this.getTel.value : this.state.tel,
				access: validator.isInt(this.getAccess.value) ? this.getAccess.value : this.state.access,
				college: this.getCollege.value
			},
			() => {
				this.props.editCallback(
					_.omit(
						_.assign(this.state, {
							id: this.props.userData.userID,
							username: this.props.userData.username
						}),
						"isEditing",
						"banned"
					)
				);
			}
		);
	}

	triggerDeleteCallback(e) {
		e.preventDefault();
		this.props.deleteCallback(this.props.userData.userID);
	}

	triggerBanToggleCallback(e) {
		e.preventDefault();
		this.setState(
			{
				banned: !this.state.banned
			},
			() => this.props.banToggleCallback(this.props.userData.userID, this.state.banned)
		);
	}

	render() {
		return this.state.isEditing ? (
			<tr>
				<td>{this.props.userData.userID}</td>
				<td>
					<Link to={`/userLog${this.props.userData.username}`}>{this.props.userData.username}</Link>
				</td>
				<td>
					<input className="input-email" type="text" ref={input => (this.getEmail = input)} defaultValue={this.state.email} />
				</td>
				<td>
					<input className="input-tel" type="text" ref={input => (this.getTel = input)} defaultValue={this.state.tel} />
				</td>
				<td>
					<input className="input-college" type="text" ref={input => (this.getCollege = input)} defaultValue={this.state.college} />
				</td>
				<td>
					<input className="input-access" type="text" ref={input => (this.getAccess = input)} defaultValue={this.state.access} />
				</td>
				<td>
					<button onClick={this.toggleEditing}>{this.state.isEditing ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="pencilalt" />}</button>
				</td>
				<td>
					<button onClick={this.triggerDeleteCallback}>
						<FontAwesomeIcon icon="trash-alt" />
					</button>
				</td>
				<td>
					<button onClick={this.triggerBanToggleCallback}>{this.state.banned ? "Unban" : "Ban"}</button>
				</td>
			</tr>
		) : (
			<tr>
				<td>{this.props.userData.userID}</td>
				<td>
					<Link className="Link" to={`/userLog/${this.props.userData.userID}`}>
						{this.props.userData.username}
					</Link>
				</td>
				<td>{this.state.email}</td>
				<td>{this.state.tel}</td>
				<td>{this.state.college}</td>
				<td>{this.state.access}</td>
				<td>
					<button onClick={this.toggleEditing}>{this.state.isEditing ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="pencil-alt" />}</button>
				</td>
				<td>
					<button onClick={this.triggerDeleteCallback}>
						<FontAwesomeIcon icon="trash-alt" />
					</button>
				</td>
				<td>
					<button onClick={this.triggerBanToggleCallback}>{this.state.banned ? "Unban" : "Ban"}</button>
				</td>
			</tr>
		);
	}
}

export default User;
