DECLARE

    l_boncode varchar2(100);
	
BEGIN

	l_boncode := '1917738239353474';
        
	begin
		
		delete from aps_waardebonkortingen
		where waardebonkorting_code = l_boncode;
		
		insert into aps_waardebonkortingen (
			waardebonkorting_nr,
			waardebonkorting_code,
			actief_ind,
			korting_waarde_bedrag,
			periode_begin_dttijd,
			periode_eind_dttijd,
			soort_code,
			actie_omschr,
			min_bestel,
			adg_id,
			bke_id
		) values (
			'WK99999',
			l_boncode,
			'J',
			10,
			sysdate - 365,
			sysdate + 365,
			'W1',
			'Waardebon voor Protractor tests',
			15,
			2,
			2
		);		
        
        commit; 
	
	exception
	when others then
		DBMS_OUTPUT.PUT_LINE(sqlerrm);
	end;
        
END;
