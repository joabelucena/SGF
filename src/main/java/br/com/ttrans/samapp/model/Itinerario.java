package br.com.ttrans.samapp.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="x_itinerario")
public class Itinerario {
	
	@Id
	@Column(name="itinerarioID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="descricao")
	private String desc;
	
	@OneToMany(fetch=FetchType.EAGER, orphanRemoval=true)
	@JoinColumn(name="trechoID", referencedColumnName = "itinerarioID")
	@Cascade({CascadeType.SAVE_UPDATE})
	private Set<TrechoItinerario> trechos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Set<TrechoItinerario> getTrechos() {
		return trechos;
	}

	public void setTrechos(Set<TrechoItinerario> trechos) {
		this.trechos = trechos;
	}
}
