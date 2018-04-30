package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "biens_immobiliers")
public class BienImmobilier implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_bien")
	private Long id;
	private String statut;
	@Temporal(TemporalType.DATE)
	private Date dateSoumission;
	@Embedded
	private Adresse adresse;
	@Temporal(TemporalType.DATE)
	private Date dateDisposition;
	private double revenuCadastral;

	// private ClasseStandard classeStandard;
	// private Visite visite;
	// private Acquereur acquereur;
	// private Agent agent

	// Constructeurs
	public BienImmobilier() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BienImmobilier(String statut, Date dateSoumission, Adresse adresse, Date dateDisposition,
			double revenuCadastral) {
		super();
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.adresse = adresse;
		this.dateDisposition = dateDisposition;
		this.revenuCadastral = revenuCadastral;
	}

	public BienImmobilier(Long id, String statut, Date dateSoumission, Adresse adresse, Date dateDisposition,
			double revenuCadastral) {
		super();
		this.id = id;
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.adresse = adresse;
		this.dateDisposition = dateDisposition;
		this.revenuCadastral = revenuCadastral;
	}

	// Getters et setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public Date getDateSoumission() {
		return dateSoumission;
	}

	public void setDateSoumission(Date dateSoumission) {
		this.dateSoumission = dateSoumission;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	public Date getDateDisposition() {
		return dateDisposition;
	}

	public void setDateDisposition(Date dateDisposition) {
		this.dateDisposition = dateDisposition;
	}

	public double getRevenuCadastral() {
		return revenuCadastral;
	}

	public void setRevenuCadastral(double revenuCadastral) {
		this.revenuCadastral = revenuCadastral;
	}
	

	// M�thode
	@Override
	public String toString() {
		return "BienImmobilier [id=" + id + ", statut=" + statut + ", dateSoumission=" + dateSoumission
				+ ", dateDisposition=" + dateDisposition + ", revenuCadastral=" + revenuCadastral + "]";
	}
	
	

}