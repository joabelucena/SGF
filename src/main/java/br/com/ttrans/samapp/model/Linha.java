package br.com.ttrans.samapp.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="x_linha")
@JsonIgnoreProperties(ignoreUnknown=true)
public class Linha {
	
	@Id
	@Column(name="linhaID")
	private String id;
		
	@Column(name="descricao")
	private String desc;
	
	@ManyToOne
	@JoinColumn(name="sistemaID")
	private Sistema sistema;
	
	@OneToMany(fetch=FetchType.EAGER, orphanRemoval=true)
	@JoinColumn(name="linhaID", referencedColumnName = "linhaID")
	@Cascade({CascadeType.SAVE_UPDATE})
	private Set<Itinerario> itinerario;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Sistema getSistema() {
		return sistema;
	}

	public void setSistema(Sistema sistema) {
		this.sistema = sistema;
	}

	public Set<Itinerario> getItinerario() {
		return itinerario;
	}

	public void setItinerario(Set<Itinerario> itinerario) {
		this.itinerario = itinerario;
	}
}
