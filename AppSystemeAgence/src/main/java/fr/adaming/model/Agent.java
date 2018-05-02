package fr.adaming.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonIgnore;

@XmlRootElement
@Entity
@Table(name="agents")
public class Agent implements Serializable{
	
	// d�claration des attributs
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_a")
	private int id;
	private String mdp;
	
	@JsonIgnore
	@OneToMany(mappedBy="agent", fetch = FetchType.LAZY)
	private List<Visite> visites;
	
	// d�claration des constructeurs
	public Agent() {
		super();
	}
	
	public Agent(String mdp) {
		super();
		this.mdp = mdp;
	}

	public Agent(int id, String mdp) {
		super();
		this.id = id;
		this.mdp = mdp;
	}

	// getters et setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public List<Visite> getVisites() {
		return visites;
	}

	public void setVisites(List<Visite> visites) {
		this.visites = visites;
	}
	
	
	

}