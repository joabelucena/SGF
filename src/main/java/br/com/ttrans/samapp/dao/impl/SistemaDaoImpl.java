package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.SistemaDao;
import br.com.ttrans.samapp.model.Sistema;

@Repository
public class SistemaDaoImpl implements SistemaDao {
	
	@Autowired
	private SessionFactory session;
	
	@Override
	public void add(Sistema obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Sistema obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Sistema obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	public List<Sistema> loadData() {
		return session.getCurrentSession().createCriteria(Sistema.class).list();
	}

}
