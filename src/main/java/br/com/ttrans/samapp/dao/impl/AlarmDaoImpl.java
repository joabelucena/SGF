package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.AlarmDao;
import br.com.ttrans.samapp.model.Alarm;


@Repository
public class AlarmDaoImpl implements AlarmDao {

	@Autowired
	private SessionFactory session;
	
	@Override
	public void add(Alarm alarm, Authentication authentication) {
		alarm.setInsert(authentication.getName());
		session.getCurrentSession().save(alarm);

	}
	
	@Override
	public void edit(Alarm alarm, Authentication authentication) {
		alarm.setUpdate(authentication.getName());
		session.getCurrentSession().update(alarm);

	}
	
	@Override
	public void delete(Alarm alarm, Authentication authentication) {
		session.getCurrentSession().delete(alarm);

	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<String> getNorm(Alarm norm){
		Criteria crit = session.getCurrentSession().createCriteria(Alarm.class);
		
		crit.add(Restrictions.eq("normAlarm" , norm));
		
		crit.setProjection(Projections.property("id"));
		
		return crit.list();
	}
	
	@Override
	public Alarm get(String id){
		return (Alarm) session.getCurrentSession().get(Alarm.class, id);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Alarm> loadData() {
				
		return session.getCurrentSession().createCriteria(Alarm.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY)
				.list();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Alarm> loadData(int start, int limit) {
				
		return session.getCurrentSession().createCriteria(Alarm.class)
				.setFirstResult(start)
				.setMaxResults(limit)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY)
				.list();
	}

}
