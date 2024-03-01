function solution(skill, skill_trees) {
    const skillmap = [...skill].reduce((map, e) => {
        map.set(e, e);
        return map;
    }, new Map());
    
    const skillset = [...skill].reduce((map, _, i) => {
        map.set(skill.slice(0, skill.length - i), '');
        return map;
    }, new Map());
    
    const isIncludeSkill = (char) => skillmap.has(char);
    const filterdSkillTree = skill_trees.map(str => [...str].filter(e => isIncludeSkill(e)).join('')); 
    
    return filterdSkillTree.reduce((cnt, str) => {
        if(skillset.has(str) || str === '') return cnt + 1;
        return cnt;
    }, 0);
}
