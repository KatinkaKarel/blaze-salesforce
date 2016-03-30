DECLARE

    l_boncode_prefix number := 29; /* Prefix voor bon 1, wordt steeds 1 opgehoogd. */
    l_boncode varchar2(100);
    l_bon_id number(10);
    
    CURSOR bon_id_cursor
    IS
        SELECT id as bon_id, verval_datum
        FROM CBS_bonnen a
        WHERE a.verval_datum > SYSDATE - 50 /* uit het 'verre' verleden */
        and   a.activatie_datum < (sysdate-400)
        AND ROWNUM <= 12 /* Aantal cadeaubonnen dat je wilt */
        ORDER BY ID;


BEGIN
        
    FOR t
    in bon_id_cursor
    LOOP
        
        l_boncode := 'X980Q666S333D4' || l_boncode_prefix;
        DBMS_OUTPUT.PUT_LINE(l_boncode);
        
        begin
            UPDATE cbs_bonnen a
            SET a.code = cbs_owner.cbs_util_pck.bon_code_hash(l_boncode),
                a.verval_datum = (SYSDATE + 365)
            WHERE a.id = t.bon_id;
            
            l_boncode_prefix := l_boncode_prefix + 1;
        
            DELETE FROM CBS_TRANSACTIES
            WHERE WAARDE < 0
            AND bon_id = t.bon_id;
            
            update CBS_TRANSACTIES
            set waarde = 10 /* waarde van de cadeaubon */
            where bon_id = t.bon_id;
        
        exception
        when others then
            DBMS_OUTPUT.PUT_LINE(sqlerrm);
        end;
        
        COMMIT;
            
    END LOOP;
        
END;