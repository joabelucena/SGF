package br.com.ttrans.samapp.job;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Maintenance {
	
	private static final Logger logger = LoggerFactory.getLogger(Maintenance.class);
	
	/**
	 * Process all maintenance tasks
	 * 
	 * Schedule: Runs every day @ 23:30
	 */
	@Scheduled(cron="0 30 23 1/1 * ?")
	public void checkRules(){
		
		logger.info(new SimpleDateFormat("dd/mm/YYYY hh:mm:ss a").format(new Date()) + " - Processing Tasks.. Please Wait......");
		
		logger.info(new SimpleDateFormat("dd/mm/YYYY hh:mm:ss a").format(new Date()) + " - Done");
	}
	
	/**
	 * Runs KPI's calcs and update equipment's MTBF calc field.
	 * 
	 * Schedule: Runs every Friday @ 23:00
	 */
	@Scheduled(cron="0 0 23 ? * FRI")
	public void KPI(){
		
		logger.info(new SimpleDateFormat("dd/mm/YYYY hh:mm:ss a").format(new Date()) + " - Processing KPIs.. Please Wait......");
		
		
		
		logger.info(new SimpleDateFormat("dd/mm/YYYY hh:mm:ss a").format(new Date()) + " - Done");
	}

}