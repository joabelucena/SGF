package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.LinhaDao;
import br.com.ttrans.samapp.model.Linha;

@Repository
public class LinhaDaoImpl implements LinhaDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Linha obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Linha obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Linha obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Linha> loadData() {
		return session.getCurrentSession().createCriteria(Linha.class).list();
	}

}
