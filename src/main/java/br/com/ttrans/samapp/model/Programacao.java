package br.com.ttrans.samapp.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="x_programacao")
public class Programacao {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="programacaoID")
	private int id;
	
	@Column(name="descricao")
	private String desc;
	
	@ManyToOne
	@JoinColumn(name="itinerarioID")
	private Itinerario itinerario;
	
	@OneToMany(fetch=FetchType.EAGER, orphanRemoval=true)
	@JoinColumn(name="programacaoID", referencedColumnName = "programacaoID")
	@Cascade({CascadeType.SAVE_UPDATE})
	private Set<Partida> partidas;
	
	@Column(name="programacaoDefault")
	private String progDefault;

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

	public Itinerario getItinerario() {
		return itinerario;
	}

	public void setItinerario(Itinerario itinerario) {
		this.itinerario = itinerario;
	}
	
	public Set<Partida> getPartidas() {
		return partidas;
	}

	public void setPartidas(Set<Partida> partidas) {
		this.partidas = partidas;
	}

	public String getProgDefault() {
		return progDefault;
	}

	public void setProgDefault(String progDefault) {
		this.progDefault = progDefault;
	}	
}
