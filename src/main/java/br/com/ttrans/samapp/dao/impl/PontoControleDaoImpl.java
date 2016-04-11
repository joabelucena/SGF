package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.PontoControleDao;
import br.com.ttrans.samapp.model.PontoControle;

@Repository
public class PontoControleDaoImpl implements PontoControleDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(PontoControle obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(PontoControle obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(PontoControle obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<PontoControle> loadData() {
		return session.getCurrentSession().createCriteria(PontoControle.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY)
				.list();
	}

}
