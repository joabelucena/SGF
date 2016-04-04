package br.com.ttrans.samapp.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.hibernate.annotations.OrderBy;

import br.com.ttrans.samapp.library.MenuType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name="menu")
public class Menu implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private int id;
	
	@Column(name="text")
	private String title;
	private String iconCls;
	private String url;
	private String type;
	
	@NotFound(action=NotFoundAction.IGNORE)
	@ManyToOne
	@JoinColumn(name = "parent_id")
	@JsonBackReference(value="items")
	private Menu parent;
	
	@NotFound(action=NotFoundAction.IGNORE)
	@OneToMany(mappedBy="parent",targetEntity=Menu.class,fetch=FetchType.EAGER)
	@OrderBy(clause="id")
	private Set<Menu> items;
	
	private String className;
	public Menu(){}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public MenuType getType() {
		return MenuType.get(this.type);
	}
	public void setType(MenuType type) {
		this.type = type.getCode();
	}
	public Menu getParent() {
		return parent;
	}
	public void setParent(Menu parent) {
		this.parent = parent;
	}
	
	public Set<Menu> getItems() {
		return items;
	}

	public void setItems(Set<Menu> items) {
		this.items = items;
	}

	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
}
